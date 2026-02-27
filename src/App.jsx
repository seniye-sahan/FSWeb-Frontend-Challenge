import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#252128]">
      <div className="mx-auto max-w-[1200px] px-10">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>

      {/* Footer full width background istediği için container dışında */}
      <Footer />

      <ToastContainer position="bottom-right" />
    </div>
  );
}