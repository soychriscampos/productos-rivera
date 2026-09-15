import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "../components/mobile-navigation";
import { getWhatsappHref } from "../contact";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function GaleriaPage() {
  return (
    <div className="min-h-full overflow-hidden bg-[var(--mineral)]">
      <header className="relative z-30 border-b border-[var(--line)] bg-[var(--mineral)]">
        <div className="page-container flex h-[72px] items-center justify-between gap-5">
          <Link aria-label="Productos Rivera, inicio" className="shrink-0" href="/"><Image alt="Productos Rivera" className="h-auto w-[124px] sm:w-[142px]" height={205} priority src="/images/productos-rivera-logo.png" width={463} /></Link>
          <nav aria-label="Navegación principal" className="hidden lg:block"><ul className="flex items-center gap-7 text-sm font-semibold text-[var(--charcoal)]">{navItems.map((item) => <li key={item.href}><Link aria-current={item.href === "/galeria" ? "page" : undefined} className="transition-colors hover:text-[var(--rivera-red)]" href={item.href}>{item.label}</Link></li>)}</ul></nav>
          <div className="flex items-center gap-3 sm:gap-4"><button aria-label="Cambiar idioma, español seleccionado" className="text-sm font-bold text-[var(--charcoal)] underline decoration-[var(--rivera-red)] decoration-2 underline-offset-4" type="button">ES</button><span aria-hidden="true" className="text-[var(--line)]">/</span><button aria-label="Cambiar a inglés" className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--rivera-red)]" type="button">EN</button><a className="button button-primary header-contact" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">Solicitar mango</a><MobileNavigation /></div>
        </div>
      </header>

      <main>
        <section className="page-container grid gap-8 py-10 md:grid-cols-[.75fr_1.25fr] md:items-end md:gap-14 md:py-14 lg:py-16">
          <div className="max-w-md"><p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Productos Rivera</p><h1 className="mt-4 text-[clamp(3rem,5.5vw,5.1rem)] font-semibold leading-[.94] tracking-[-.06em] text-[var(--charcoal)]">Galería</h1><p className="mt-5 text-lg leading-8 text-[var(--muted)]">Una muestra de nuestro origen, nuestro mango y las presentaciones que salen de Escuinapa.</p></div>
          <div className="grid grid-cols-[1.35fr_.65fr] items-end gap-3 sm:gap-5"><figure className="relative aspect-[1.35/1] overflow-hidden bg-[var(--charcoal)]"><Image alt="Mango fresco y deshidratado Productos Rivera" className="object-cover" fill priority quality={88} sizes="(max-width: 767px) 62vw, 50vw" src="/images/mango-detalle-circular.jpg" /></figure><figure className="relative aspect-[.72/1] overflow-hidden bg-[var(--charcoal)]"><Image alt="Detalle de mango deshidratado" className="object-cover" fill priority quality={86} sizes="(max-width: 767px) 30vw, 25vw" src="/images/mango-galeria-fruta.jpg" /></figure></div>
        </section>

        <section className="page-container pb-14 md:pb-20" aria-labelledby="origen-title">
          <div className="mb-7 flex items-end justify-between gap-5 border-b border-[var(--line)] pb-5"><h2 className="text-2xl font-semibold tracking-[-.04em] text-[var(--charcoal)]" id="origen-title">Origen</h2><p className="hidden text-sm text-[var(--muted)] sm:block">Escuinapa, Sinaloa</p></div>
          <div className="grid gap-4 md:grid-cols-[1.45fr_.75fr] md:gap-6"><GalleryImage alt="Mango de Productos Rivera junto a fruta fresca" caption="Escuinapa, Sinaloa" className="aspect-[1.45/1]" sizes="(max-width: 767px) 100vw, 62vw" src="/images/nosotros-origen.jpg" /><GalleryImage alt="Mango fresco y mango deshidratado" caption="Mango deshidratado" className="aspect-[.78/1] md:mt-12" sizes="(max-width: 767px) 100vw, 34vw" src="/images/mango-producto-origen.jpg" /></div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-14 md:py-20" aria-labelledby="producto-title">
          <div className="page-container"><div className="mb-7 flex items-end justify-between gap-5 border-b border-[var(--line)] pb-5"><h2 className="text-2xl font-semibold tracking-[-.04em] text-[var(--charcoal)]" id="producto-title">Producto</h2><p className="hidden text-sm text-[var(--muted)] sm:block">Natural y enchilado</p></div><div className="grid gap-4 md:grid-cols-[.8fr_1.2fr] md:items-end md:gap-6"><GalleryImage alt="Mango deshidratado natural en presentación" caption="Presentación natural" className="aspect-[.9/1] md:mb-12" sizes="(max-width: 767px) 100vw, 36vw" src="/images/mango-presentacion-circular.jpg" /><GalleryImage alt="Mango deshidratado con chile" caption="Presentación enchilada" className="aspect-[1.45/1]" sizes="(max-width: 767px) 100vw, 60vw" src="/images/hero-mango-chile.jpg" /></div></div>
        </section>

        <section className="page-container py-14 md:py-20" aria-labelledby="proceso-title">
          <div className="mb-7 flex items-end justify-between gap-5 border-b border-[var(--line)] pb-5"><h2 className="text-2xl font-semibold tracking-[-.04em] text-[var(--charcoal)]" id="proceso-title">Proceso</h2><p className="hidden text-sm text-[var(--muted)] sm:block">Selección y presentación</p></div><div className="grid gap-4 md:grid-cols-[1.2fr_.8fr] md:gap-6"><GalleryImage alt="Mango deshidratado en una composición de Producto Rivera" caption="Selección de mango" className="aspect-[1.45/1]" sizes="(max-width: 767px) 100vw, 58vw" src="/images/nosotros-proceso.jpg" /><GalleryImage alt="Presentación de mango deshidratado sobre mesa" caption="Producto terminado" className="aspect-square md:mt-12" sizes="(max-width: 767px) 100vw, 40vw" src="/images/mango-galeria-mesa.jpg" /></div>
        </section>
      </main>

      <footer className="bg-[#171614] py-10 text-[#e7e3dc]"><div className="page-container grid gap-9 md:grid-cols-[1fr_auto] md:items-end"><div><Image alt="Productos Rivera" className="h-auto w-[148px]" height={941} src="/images/white-rivera.png" width={1672} /><p className="mt-5 max-w-[31rem] text-sm leading-6 text-[#bdb8af]">Mango deshidratado de Escuinapa, Sinaloa.</p></div><div className="grid gap-3 text-sm md:text-right"><a className="font-semibold text-white transition-colors hover:text-[#f4c9c0]" href="mailto:prorisamexico@gmail.com">prorisamexico@gmail.com</a><div className="flex gap-5 md:justify-end"><a className="transition-colors hover:text-white" href="https://www.facebook.com/MangosRiveraDeEscuinapa/" rel="noopener noreferrer" target="_blank">Facebook</a><a className="transition-colors hover:text-white" href="https://www.instagram.com/mangos_rivera/" rel="noopener noreferrer" target="_blank">Instagram</a></div></div></div></footer>
    </div>
  );
}

function GalleryImage({ alt, caption, className, sizes, src }: { alt: string; caption?: string; className: string; sizes: string; src: string }) {
  return <figure className={`relative overflow-hidden bg-[var(--charcoal)] ${className}`}><Image alt={alt} className="object-cover" fill loading="lazy" quality={86} sizes={sizes} src={src} />{caption ? <figcaption className="absolute bottom-0 left-0 bg-[var(--mineral)] px-4 py-3 text-xs font-semibold text-[var(--charcoal)] sm:px-5">{caption}</figcaption> : null}</figure>;
}
