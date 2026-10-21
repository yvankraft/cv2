import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-zinc-900 selection:bg-black selection:text-white overflow-x-hidden font-mono">
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}
