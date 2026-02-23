import { useContext } from "react";
import AppContext from "../context/AppContext";
import content from "../data/content";

export default function Projects() {
    const { language } = useContext(AppContext);
    const t = content[language];

    return (
        <section id="skills" className="w-full py-24 font-inter">
            <div className="max-w-[1200px] mx-auto px-10">
                <h2 className="text-5xl font-semibold text-[#1F2937] dark:text-white  mb-8">
                    {t.skills.title}
                </h2>

                <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-[120px]">
                    {t.profile.items.map((skill) => (
                        <div key={skill.name} className="w-full md:w-[300px]">
                            <h3 className="text-3xl font-medium text-[#4338CA] mb-6">
                                {skill.name}
                            </h3>
                            <p className="max-w-[300px] text-[#6B7280] dark:text-gray-300 text-xs font-normal leading-4">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 border-t border-[#BAB2E7] dark:border-[#3a3350]"></div>
            </div>
        </section>
    );
}