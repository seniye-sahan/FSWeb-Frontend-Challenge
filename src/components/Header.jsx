import { useContext } from "react";
import AppContext from "../context/AppContext";
import Logo from "./Logo";
import ModeSwitch from "./ModeSwitch";

export default function Header() {
  const { t } = useContext(AppContext);

  return (
    <header className="w-full pt-6">
          <div className="mx-auto max-w-[1100px] px-10">
      {/* ÜST SATIR */}
      <div className="flex justify-end">
        <ModeSwitch />
      </div>

      {/* ALT SATIR */}
      <div className="mt-6 flex items-center justify-between">
        {/* SOL: Logo */}
        <Logo />

        {/* SAĞ: Nav + Hire me */}
        <div className="flex items-center gap-10 font-medium">
          <a
            href="#skills"
            className="text-[#6B7280] text-lg hover:text-[#4731D3]"
          >
            {t.nav.skills}
          </a>

          <a
            href="#projects"
            className="text-[#6B7280] text-lg hover:text-[#4731D3]"
          >
            {t.nav.projects}
          </a>

          <a
            href="#hire"
            className="w-[131px] h-[52px] flex items-center justify-center rounded-lg border border-[#3730A3] text-[#3730A3] text-lg font-medium whitespace-nowrap"
          >
            {t.nav.hire}
          </a>
        </div>
        </div>
      </div>
    </header>
  );
}