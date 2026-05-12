import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Founders from "./components/Founders";
import WaitlistClose from "./components/WaitlistClose";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Founders />
        <WaitlistClose />
      </main>
      <Footer />
    </>
  );
}
