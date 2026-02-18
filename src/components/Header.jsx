import Logo from "./Logo";
import ModeSwitch from "./ModeSwitch";

export default function Header() {
  return (
    <header className="w-full px-10 pt-6">
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
            Skills
          </a>

          <a
            href="#projects"
            className="text-[#6B7280] text-lg hover:text-[#4731D3]"
          >
            Projects
          </a>

          <a
            href="#hire"
            className="w-[131px] h-[52px] flex items-center justify-center rounded-lg border border-[#3730A3] text-[#3730A3] text-lg font-medium whitespace-nowrap"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}