import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#252128]">
      <Header />
      <Hero />
      <Skills />
      <Profile/>
    </div>
  );
}