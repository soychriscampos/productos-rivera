import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { MobileNavigation } from "../components/mobile-navigation";
import { getWhatsappHref } from "../contact";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function ContactoPage() {
  return (
    <div className="min-h-full overflow-hidden bg-[var(--mineral)]">
      <header className="relative z-30 border-b border-[var(--line)] bg-[var(--mineral)]"><div className="page-container flex h-[72px] items-center justify-between gap-5"><Link aria-label="Productos Rivera, inicio" className="shrink-0" href="/"><Image alt="Productos Rivera" className="h-auto w-[124px] sm:w-[142px]" height={205} priority src="/images/productos-rivera-logo.png" width={463} /></Link><nav aria-label="Navegación principal" className="hidden lg:block"><ul className="flex items-center gap-7 text-sm font-semibold text-[var(--charcoal)]">{navItems.map((item) => <li key={item.href}><Link aria-current={item.href === "/contacto" ? "page" : undefined} className="transition-colors hover:text-[var(--rivera-red)]" href={item.href}>{item.label}</Link></li>)}</ul></nav><div className="flex items-center gap-3 sm:gap-4"><button aria-label="Cambiar idioma, español seleccionado" className="text-sm font-bold text-[var(--charcoal)] underline decoration-[var(--rivera-red)] decoration-2 underline-offset-4" type="button">ES</button><span aria-hidden="true" className="text-[var(--line)]">/</span><button aria-label="Cambiar a inglés" className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--rivera-red)]" type="button">EN</button><a className="button button-primary header-contact" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">Solicitar mango</a><MobileNavigation /></div></div></header>

      <main>
        <section className="page-container grid gap-10 py-10 md:py-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:py-16">
          <div className="flex flex-col justify-between gap-9"><div><p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Productos Rivera</p><h1 className="mt-4 text-[clamp(3rem,5.5vw,5.1rem)] font-semibold leading-[.94] tracking-[-.06em] text-[var(--charcoal)]">Contacto</h1><p className="mt-5 max-w-[36ch] text-lg leading-8 text-[var(--muted)]">Solicita información comercial sobre pedidos, mayoreo y presentaciones de mango deshidratado.</p></div><div className="relative aspect-[1.4/1] overflow-hidden bg-[var(--charcoal)]"><Image alt="Mango deshidratado Productos Rivera" className="object-cover" fill priority quality={86} sizes="(max-width: 1023px) 100vw, 42vw" src="/images/mango-galeria-mesa.jpg" /></div></div>
          <div className="flex flex-col justify-center"><div><h2 className="text-xl font-semibold tracking-[-.03em] text-[var(--charcoal)]">Envíanos un mensaje</h2><ContactForm /></div></div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-12 md:py-16"><div className="page-container grid gap-10 md:grid-cols-2 md:gap-16"><div><h2 className="text-2xl font-semibold tracking-[-.04em] text-[var(--charcoal)]">Datos de contacto</h2><dl className="mt-7 grid gap-6 text-sm leading-6"><div><dt className="font-bold text-[var(--charcoal)]">WhatsApp</dt><dd><a className="text-[var(--muted)] underline decoration-[var(--rivera-red)] underline-offset-4" href="https://wa.me/526959512141" rel="noopener noreferrer" target="_blank">+52 695 951 2141</a></dd></div><div><dt className="font-bold text-[var(--charcoal)]">Correo electrónico</dt><dd><a className="text-[var(--muted)] underline decoration-[var(--rivera-red)] underline-offset-4" href="mailto:prorisamexico@gmail.com">prorisamexico@gmail.com</a></dd></div></dl></div><div><h2 className="text-2xl font-semibold tracking-[-.04em] text-[var(--charcoal)]">Dónde estamos</h2><dl className="mt-7 grid gap-6 text-sm leading-6 text-[var(--muted)]"><div><dt className="font-bold text-[var(--charcoal)]">Oficina</dt><dd>Gabriel Leyva #12, Col. Centro<br />Escuinapa, Sinaloa.</dd></div><div><dt className="font-bold text-[var(--charcoal)]">Planta</dt><dd>Carretera Internacional Norte México-Nogales<br />Km 1107 y 1108, Escuinapa, Sinaloa.</dd></div></dl></div></div></section>

      </main>

      <footer className="bg-[#171614] py-10 text-[#e7e3dc]"><div className="page-container grid gap-9 md:grid-cols-[1fr_auto] md:items-end"><div><Image alt="Productos Rivera" className="h-auto w-[148px]" height={941} src="/images/white-rivera.png" width={1672} /><p className="mt-5 max-w-[31rem] text-sm leading-6 text-[#bdb8af]">Mango deshidratado de Escuinapa, Sinaloa.</p></div><div className="grid gap-3 text-sm md:text-right"><a className="font-semibold text-white transition-colors hover:text-[#f4c9c0]" href="mailto:prorisamexico@gmail.com">prorisamexico@gmail.com</a><div className="flex gap-5 md:justify-end"><a className="transition-colors hover:text-white" href="https://www.facebook.com/MangosRiveraDeEscuinapa/" rel="noopener noreferrer" target="_blank">Facebook</a><a className="transition-colors hover:text-white" href="https://www.instagram.com/mangos_rivera/" rel="noopener noreferrer" target="_blank">Instagram</a></div></div></div></footer>
    </div>
  );
}
