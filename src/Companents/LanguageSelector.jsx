import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "uz", label: "UZ" },
        { code: "ru", label: "RU" },
        { code: "en", label: "EN" },
    ];

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    const selectLang = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button onClick={() => setOpen(!open)} className=" text-white rounded-[8px] w-[40px] h-[29px] text-[18px] p-2 flex gap-2 items-center" >
                {currentLang.label}
            </button>


            {open && (
                <div className="absolute bg-black/20 backdrop-blur-lg text-white rounded-md shadow-md mt-2 w-[32px]">
                    {languages
                        .filter(lang => lang.code !== currentLang.code) 
                        .map(lang => (
                            <button className="block w-full px-2 hover:bg-gray-400 hover:rounded-[8px] flex gap-2 text-center items-center"
                            key={lang.code} onClick={() => selectLang(lang.code)} >{lang.label}
                            </button>
                        ))
                    }
                </div>
            )}

        </div>
    );
}

