import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function ModeSwitch() {
    const { theme, toggleTheme, language, toggleLanguage } = useContext(AppContext);
    const isDark = theme === "dark";

    return (
        <div className="flex items-center gap-2 text-[15px] text-[#777777] font-bold tracking-[0.08em]">
            {/* Toggle */}
            <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={isDark}
                aria-label="Toggle dark mode"
                className="relative h-[24px] w-[55px] rounded-full bg-[#4731D3]"
            >
                <span
                    className={[
                        "absolute top-[4px]",
                        "h-[16px] w-[15px] rounded-full bg-[#FFE86E]",
                        "transition-all duration-300",
                        isDark ? "left-[2px]" : "right-[4px]"
                    ].join(" ")}
                />
            </button>

            <span>DARK MODE</span>
            <span className="">|</span>

            <button
                type="button"
                onClick={toggleLanguage}
                className="bg-transparent p-0 border-0 font-bold flex items-center gap-1"
            >
                <span className="text-[#4731D3]">
                    {language === "tr" ? "ENGLISH" : "TÜRKÇE"}
                </span>
                <span className="text-[#777777]">
                    {language === "tr" ? "'YE GEÇ" : "'YE GEÇ"}
                </span>
            </button>
        </div>
    );
}