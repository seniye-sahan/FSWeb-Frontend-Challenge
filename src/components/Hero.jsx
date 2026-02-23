import { useContext } from "react";
import AppContext from "../context/AppContext";
import content from "../data/content";

export default function Hero() {
    const { language } = useContext(AppContext);
    const t = content[language];

    return (
        <section className="w-full pt-16 py-24">
            <div className="max-w-[1200px] mx-auto px-10">
               <div className="grid grid-cols-1 lg:grid-cols-[596px_476px] gap-8 lg:gap-16 items-center">
                    {/* LEFT */}
                     <div className="w-[596px]">
                        {/* name line */}
                        <div className="flex items-center gap-4 mb-10">
                            <span className="w-[102px] border-t border-[#3730A3]" />
                            <span className="text-[#4338CA] text-xl font-medium">
                                {t.hero.name}
                            </span>
                        </div>

                        <h1 className="mt-6 text-7xl leading-none font-bold text-[#1F2937] dark:text-white">
                            <span className="block whitespace-nowrap">{t.hero.title}</span>
                            <span className="block whitespace-nowrap">{t.hero.subtitle}</span>
                        </h1>

                        <p className="mt-6 max-w-[558px] text-[18px] font-normal leading-7 text-[#6B7280] dark:text-gray-200">
                            {t.hero.intro}
                        </p>

                        <div className="mt-8 flex whitespace-nowrap items-center gap-4">
                            <a
                                href="#hire"
                                className="h-[52px] w-[131px] px-10 rounded-lg bg-[#3730A3] text-lg text-white font-medium inline-flex items-center justify-center"
                            >
                                {t.hero.buttons.hire}
                            </a>

                            {t.hero.socials.map((s) => (
                                <a
                                    key={s.text}
                                    href={s.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-[52px]  px-6 rounded-lg border border-[#3730A3] text-[#3730A3] text-lg font-medium inline-flex items-center gap-[10px]"
                                >
                                    <img src={`/${s.icon}`} alt={s.text} className="h-[26px]" />
                                    {s.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                   <div className="justify-self-end">
                        <img
                            src={`/${t.hero.profileImage}`}
                            alt={t.hero.name}
                            className="w-[476px] h-[375px] shrink-0 rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}