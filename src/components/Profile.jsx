import { useContext } from "react";
import AppContext from "../context/AppContext";
import content from "../data/content";

export default function Profile() {
    const { language } = useContext(AppContext);
    const t = content[language];

    return (
        <section id="profile" className="w-full font-inter py-2">
            <div className="max-w-[1200px] mx-auto px-10">
                <div className="mt-2 border-t border-[#BAB2E7] dark:border-[#3a3350] py-4"></div>
                {/* başlık */}
                <h2 className="text-5xl font-semibold leading-none text-[#1F2937] dark:text-white mb-10 mt-2">
                    {t.profile.title}
                </h2>

                {/* içerik: sol (details) + sağ (about) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* LEFT */}
                    <div>
                        <h3 className="text-3xl font-medium text-[#4338CA] mb-8">
                            {t.profile.title}
                        </h3>

                        <div className="space-y-2">
                            {t.profile.details.map((item) => (
                                <div key={item.label} className="flex gap-4">
                                    <span className="w-[155.6509246826172px] text-lg font-semibold text-[#000000] dark:text-white">
                                        {item.label}
                                    </span>
                                    <span className="w-[231.7967071533203px] text-[#000000] font-normal text-lg dark:text-gray-200">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h3 className="text-3xl font-medium text-[#4338CA] mb-4">
                            {t.profile.aboutTitle}
                        </h3>

                        <p className="text-[#6B7280] dark:text-gray-200 text-lg font-normal line-height:150%">
                            {t.profile.aboutText}
                        </p>
                        <br />
                        <p className="text-[#6B7280] dark:text-gray-200 font-normal text-lg line-height:150%">
                            {t.profile.aboutText2}
                        </p>
                    </div>
                </div>
                {/* üst çizgi */}
                <div className="mt-10 border-t border-[#BAB2E7]"></div>
            </div>
        </section>
    );
}