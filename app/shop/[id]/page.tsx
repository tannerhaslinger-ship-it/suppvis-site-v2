import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ComplianceFooter from "../ComplianceFooter";
import { fetchProducts, Product } from "../../lib/api";
import ProductDetail from "./ProductDetail";

interface Props {
  params: { id: string };
}

async function getAllProducts() {
  return fetchProducts();
}

function findProduct(products: Product[], id: string) {
  return products.find((p) => p.id === id) ?? null;
}

function findRelated(products: Product[], product: Product): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.canonicalKey === product.canonicalKey ||
          p.goals?.some((g) => product.goals?.includes(g)))
    )
    .slice(0, 4);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const products = await getAllProducts();
  const product = findProduct(products, params.id);
  if (!product) {
    return { title: "Product Not Found | SuppVis Shop" };
  }
  return {
    title: `${product.productName} by ${product.brand} | SuppVis Shop`,
    description: `${product.keyBenefit}. ${product.servings} servings, ${product.dosePerServing} per serving. ${product.form}.`,
    openGraph: {
      title: `${product.productName} - ${product.brand}`,
      description: product.keyBenefit,
      images: product.imageUrl ? [{ url: product.imageUrl }] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const products = await getAllProducts();
  const product = findProduct(products, params.id);

  if (!product) {
    return (
      <>
        <Nav />
        <main className="pt-32 pb-24 px-6 min-h-screen">
          <div className="max-w-[720px] mx-auto text-center">
            <h1 className="font-headline font-bold text-4xl text-text-primary mb-4">
              Product not found
            </h1>
            <p className="text-text-secondary mb-8">
              This product may have been removed or the link is incorrect.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Back to Shop &rarr;
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = findRelated(products, product);

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ProductDetail product={product} related={related} />
        </div>
      </main>
      <ComplianceFooter />
      <Footer />
    </>
  );
}
