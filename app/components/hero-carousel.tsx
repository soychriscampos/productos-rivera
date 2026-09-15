"use client";

import Image from "next/image";
import { useState } from "react";
import { getWhatsappHref } from "../contact";

const slides = [
  {
    alt: "Mango deshidratado orgánico Productos Rivera en presentación natural",
    eyebrow: "Mango orgánico deshidratado",
    image: "/images/hero-mango-natural.jpg",
    imageClass: "hero-carousel-image-natural",
    title: "Una obra de arte en cada bocado.",
  },
  {
    alt: "Detalle de mango deshidratado natural Productos Rivera",
    eyebrow: "Mango deshidratado natural",
    image: "/images/mango-galeria-fruta.jpg",
    imageClass: "hero-carousel-image-fruta",
    title: "Una deliciosa mezcla de sabores.",
  },
  {
    alt: "Presentación de mango deshidratado Productos Rivera",
    eyebrow: "Producto 100% mexicano y certificado orgánico",
    image: "/images/mango-producto-origen.jpg",
    imageClass: "hero-carousel-image-origen",
    title: "Mexicano y certificado orgánico.",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section aria-label="Destacados Productos Rivera" className="hero-carousel relative isolate min-h-[calc(100dvh-72px)] overflow-hidden bg-[var(--charcoal)] text-white" id="inicio">
      {slides.map((slide, index) => (
        <div aria-hidden={index !== activeSlide} className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"}`} key={slide.image}>
          <Image alt={slide.alt} className={`hero-carousel-image object-cover ${slide.imageClass}`} fill priority={index === 0} quality={90} sizes="100vw" src={slide.image} />
        </div>
      ))}

      <div className="relative z-10 page-container flex min-h-[calc(100dvh-72px)] flex-col justify-end pb-12 pt-28 md:pb-16 lg:pb-20">
        <div className="max-w-xl">
          <p className="text-sm font-bold tracking-[.02em] text-[#f4c9c0]">{slides[activeSlide].eyebrow}</p>
          <h1 className="mt-4 max-w-[16ch] text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[.94] tracking-[-.05em] text-white">{slides[activeSlide].title}</h1>
          <a className="button mt-8 border border-white bg-white text-[var(--charcoal)] hover:bg-[#f1eee8]" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">¡Haz tu pedido!</a>
        </div>

        <div className="mt-10 flex items-center gap-3" role="group" aria-label="Seleccionar destacado">
          {slides.map((slide, index) => (
            <button
              aria-label={`Ver destacado ${index + 1}: ${slide.eyebrow}`}
              aria-pressed={index === activeSlide}
              className={`hero-carousel-control ${index === activeSlide ? "is-active" : ""}`}
              key={slide.image}
              onClick={() => setActiveSlide(index)}
              type="button"
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
