import { useContext } from "react";
import AppContext from "../context/AppContext";
import content from "../data/content";
import { api } from "../services/api";
import { hirePayload } from "../data/data";
import { toast } from "react-toastify";

export default function Footer() {
    const { language } = useContext(AppContext);
    const t = content[language];

    async function handleHire() {
        const toastId = toast.loading(
            language === "tr" ? "Gönderiliyor..." : "Sending..."
        );

        try {
            const payload = {
                ...hirePayload,         
                email: t.footer.email,   
                language,
                date: new Date().toISOString(),
            };

            const res = await api.post("/users", 
  { headers: { 'x-api-key': 'reqres_cb9bbd502adc449da0973298d6342c23' }},payload
);

            toast.update(toastId, {
                render: `Sent ✅ id: ${res.data.id}`,
                type: "success",
                isLoading: false,
                autoClose: 2500,
            });

            console.log("API response:", res.data);
        } catch (err) {
            console.error(err);
            toast.update(toastId, {
                render: language === "tr" ? "Ağ hatası ❌" : "Network error ❌",
                type: "error",
                isLoading: false,
                autoClose: 2500,
            });
        }
    }




    return (
        <footer id="hire" className="w-full bg-[#F9FAFB] dark:bg-[#252128] py-24 font-inter">
            <div className="max-w-[1200px] mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* LEFT */}
                    <div className="flex flex-col">
                        <h2 className="text-5xl font-semibold text-[#1F2937] dark:text-white mb-10">
                            {t.footer.title}
                        </h2>

                        {/* EMAIL */}
                        <a
                            href={`mailto:${t.footer.email}`}
                            className="inline-flex items-center gap-2 text-xl font-medium text-[#AF0C48]"
                        >
                            <span aria-hidden="true">👉</span>
                            <span className="border-b border-[#AF0C48] pb-[2px]">
                                {t.footer.email}
                            </span>
                        </a>

                        {/* BUTTON */}
                        <button
                            type="button"
                            onClick={handleHire}
                            className="
                mt-10 w-fit h-[52px] px-10 rounded-lg
                bg-[#3730A3] text-white text-lg font-medium
                hover:opacity-90 transition
              "
                        >
                            {language === "tr" ? "Gönder" : "Hire me"}
                        </button>
                    </div>

                    {/* RIGHT (desktop'ta EN SAĞ) */}
                    <div className="md:justify-self-end md:pt-[140px]">
                        <div className="flex gap-8 text-lg font-medium">
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#0A0A14] dark:text-white hover:opacity-80"
                            >
                                Personal Blog
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#00AB6B] hover:opacity-80"
                            >
                                Github
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#0077B5] hover:opacity-80"
                            >
                                Linkedin
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}