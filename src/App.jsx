import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#252128]">
      <div className="mx-auto max-w-[1200px] px-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}