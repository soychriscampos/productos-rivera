"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getWhatsappHref } from "../contact";

const navigation = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button aria-controls="mobile-navigation" aria-expanded={isOpen} className="menu-trigger" onClick={() => setIsOpen((open) => !open)} type="button">
        <span className="sr-only">{isOpen ? "Cerrar navegación" : "Abrir navegación"}</span>
        <span aria-hidden="true" className={isOpen ? "menu-lines is-open" : "menu-lines"}><span /><span /></span>
      </button>
      <div className={isOpen ? "mobile-panel is-open" : "mobile-panel"} id="mobile-navigation">
        <nav aria-label="Navegación principal móvil"><ul>{navigation.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link></li>)}</ul></nav>
        <a className="button button-primary" href={getWhatsappHref("es")} onClick={() => setIsOpen(false)} rel="noopener noreferrer" target="_blank">Contactar por WhatsApp</a>
      </div>
    </div>
  );
}
