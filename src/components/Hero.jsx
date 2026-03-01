import { useContext } from "react";
import AppContext from "../context/AppContext";
import content from "../data/content";

export default function Hero() {
  const { language } = useContext(AppContext);
  const t = content[language];

  return (
    <section className="w-full pt-16 pb-24 font-inter">
        <div className="max-w-[1200px] mx-auto px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[596px_476px] gap-10 xl:gap-12 items-center">
        {/* LEFT */}
        <div className="w-full xl:w-[596px]">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-[102px] border-t border-[#3730A3]" />
            <span className="text-[#4338CA] text-xl font-medium">
              {t.hero.name}
            </span>
          </div>

          <h1 className="text-5xl xl:text-7xl leading-none font-bold text-[#1F2937] dark:text-white">
            <span className="block">{t.hero.title}</span>
            <span className="block">{t.hero.subtitle}</span>
          </h1>

          <p className="mt-6 max-w-[558px] text-[18px] leading-7 text-[#6B7280] dark:text-gray-200">
            {t.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#hire"
              className="h-[52px] px-10 rounded-lg bg-[#3730A3] text-lg text-white font-medium inline-flex items-center justify-center"
            >
              {t.hero.buttons.hire}
            </a>

            {t.hero.socials.map((s) => (
              <a
                key={s.text}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="h-[52px] px-6 rounded-lg border border-[#3730A3] text-[#3730A3] dark:text-[#A5B4FC] text-lg font-medium inline-flex items-center gap-[10px]"
              >
                <img src={`/${s.icon}`} alt={s.text} className="h-[26px]" />
                {s.text}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src={`/${t.hero.profileImage}`}
            alt={t.hero.name}
            className="
              w-full
              max-w-[476px]
              lg:max-w-[420px]
              xl:max-w-[476px]
              h-auto
              xl:h-[375px]
              rounded-2xl
              object-cover
              block
            "
          />
        </div>
      </div>
     </div>
    </section>
  );
}