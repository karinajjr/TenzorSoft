import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Partners() {
    const topSliderRef = useRef(null);

    useEffect(() => {
        const makeInfiniteSlider = (sliderRef, direction = "left") => {
            const slider = sliderRef.current;
            if (!slider) return;

            const slides = Array.from(slider.querySelectorAll("img"));
            const slideWidth = slides[0].offsetWidth + 16;
            const totalWidth = slideWidth * slides.length;

            slides.forEach((slide) => {
                const clone = slide.cloneNode(true);
                slider.appendChild(clone);
            });

            gsap.set(slider, {
                x: direction === "left" ? 0 : -totalWidth,
            });

            gsap.to(slider, {
                x: direction === "left" ? -totalWidth : 0,
                duration: 90,
                ease: "none",
                repeat: -1,
                onRepeat: () => {
                    gsap.set(slider, {
                        x: direction === "left" ? 0 : -totalWidth,
                    });
                },
            });
        };

        makeInfiniteSlider(topSliderRef, "left");
    }, []);

    const slides = [

       
        { src: "/partner/energetika-vazirliki.png", w: "137px", h: "40px" },
        { src: "/partner/hamkorbank.png", w: "40px", h: "40px" },
        { src: "/partner/uzpotash.png", w: "179px", h: "40px" },
        { src: "/partner/ungbuxoronqiz.png", w: "56px", h: "40px" },
        { src: "/partner/kungradskiy.png", w: "158px", h: "40px" },
        { src: "/partner/uzkimyasanoat.png", w: "64px", h: "40px" },
        { src: "/partner/navoiyazot.png", w: "209px", h: "40px" },
        { src: "/partner/ammofos.png", w: "58px", h: "40px" },
        { src: "/partner/maxam-chirchik.png", w: "172px", h: "40px" },
        { src: "/partner/fosforit.png", w: "40px", h: "40px" },

        { src: "/partner/energetika-vazirliki.png", w: "137px", h: "40px" },
         { src: "/partner/asiatransgas.png", w: "106px", h: "40px" },
        { src: "/partner/unsShurtanGkm.png", w: "44px", h: "40px" },
        { src: "/partner/nbu.png", w: "46px", h: "40px" },
        { src: "/partner/ozbekneftegaz.png", w: "42px", h: "40px" },
        { src: "/partner/ozbekomir.png", w: "52px", h: "40px" },


    ];

    return (
        <section id="partners" className="">
            <div className="relative overflow-hidden">
                <div ref={topSliderRef} className="flex gap-[64px] ">
                    {slides.map((item, i) => (
                        <img
                            key={i}
                            src={item.src}
                            style={{ width: item.w, height: item.h }}
                            className="object-contain"
                            alt="partner"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
