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

const products = [
  { family: "Mango Natural", weight: "250 g", description: "La mejor selección de mangos, en su sabor más puro.", image: "/images/producto-natural-250-celofan.jpg" },
  { family: "Mango Natural", weight: "500 g", description: "La mejor selección de mangos, en su sabor más puro.", image: "/images/producto-natural-500-celofan.jpg" },
  { family: "Mango Enchilado", weight: "250 g", description: "El favorito de muchos por su deliciosa mezcla de sabores.", image: "/images/producto-chile-250-celofan.jpg" },
  { family: "Mango Enchilado", weight: "500 g", description: "El favorito de muchos por su deliciosa mezcla de sabores.", image: "/images/producto-chile-500-celofan.jpg" },
];

function whatsappHref(message: string) {
  return `https://wa.me/526959512141?text=${encodeURIComponent(message)}`;
}

export default function ProductosPage() {
  return (
    <div className="min-h-full overflow-hidden bg-[var(--mineral)]">
      <header className="relative z-30 border-b border-[var(--line)] bg-[var(--mineral)]">
        <div className="page-container flex h-[72px] items-center justify-between gap-5">
          <Link aria-label="Productos Rivera, inicio" className="shrink-0" href="/"><Image alt="Productos Rivera" className="h-auto w-[124px] sm:w-[142px]" height={205} priority src="/images/productos-rivera-logo.png" width={463} /></Link>
          <nav aria-label="Navegación principal" className="hidden lg:block"><ul className="flex items-center gap-7 text-sm font-semibold text-[var(--charcoal)]">{navItems.map((item) => <li key={item.href}><Link aria-current={item.href === "/productos" ? "page" : undefined} className="transition-colors hover:text-[var(--rivera-red)]" href={item.href}>{item.label}</Link></li>)}</ul></nav>
          <div className="flex items-center gap-3 sm:gap-4"><button aria-label="Cambiar idioma, español seleccionado" className="text-sm font-bold text-[var(--charcoal)] underline decoration-[var(--rivera-red)] decoration-2 underline-offset-4" type="button">ES</button><span aria-hidden="true" className="text-[var(--line)]">/</span><button aria-label="Cambiar a inglés" className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--rivera-red)]" type="button">EN</button><a className="button button-primary header-contact" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">Solicitar mango</a><MobileNavigation /></div>
        </div>
      </header>

      <main>
        <section className="page-container grid gap-7 py-10 md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-12 md:py-14 lg:py-16">
          <div><p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Mango deshidratado</p><h1 className="mt-4 text-[clamp(2.9rem,5vw,4.8rem)] font-semibold leading-[.95] tracking-[-.06em] text-[var(--charcoal)]">Productos</h1><p className="mt-5 max-w-[38ch] text-lg leading-8 text-[var(--muted)]">Mango deshidratado natural y enchilado en presentaciones de 250 g y 500 g.</p></div>
          <figure className="relative aspect-[1.7/1] overflow-hidden bg-[var(--charcoal)] md:aspect-[1.8/1]"><Image alt="Detalle de mango deshidratado Productos Rivera" className="object-cover" fill priority quality={88} sizes="(max-width: 767px) 100vw, 60vw" src="/images/mango-detalle-circular.jpg" /></figure>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-12 md:py-16" aria-labelledby="catalogo-title">
          <div className="page-container"><div className="flex flex-col gap-3 border-b border-[var(--line)] pb-7 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-none tracking-[-.05em] text-[var(--charcoal)]" id="catalogo-title">Mango Natural y Enchilado</h2><p className="text-sm text-[var(--muted)]">Cuatro presentaciones</p></div>
            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-8">{products.map((product) => <article key={`${product.family}-${product.weight}`}><figure className="relative aspect-square overflow-hidden bg-[var(--mineral)]"><Image alt={`${product.family}, ${product.weight}`} className="object-cover" fill quality={88} sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 25vw" src={product.image} /></figure><div className="mt-4"><h3 className="text-base font-semibold leading-tight tracking-[-.02em] text-[var(--charcoal)] sm:text-lg">{product.family}</h3><p className="mt-2 text-sm text-[var(--muted)]">{product.weight}</p><p className="mt-3 max-w-[26ch] text-sm leading-6 text-[var(--muted)]">{product.description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="page-container py-10 md:py-12" aria-labelledby="mayoreo-title"><div className="border-y border-[var(--line)] py-8 md:py-9"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10"><div><p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Mayoreo</p><h2 className="mt-3 text-[clamp(1.9rem,3.2vw,3rem)] font-semibold leading-[.98] tracking-[-.05em] text-[var(--charcoal)]" id="mayoreo-title">¿Buscas comprar por volumen?</h2><p className="mt-3 max-w-[45ch] text-base leading-7 text-[var(--muted)]">Cotizaciones personalizadas de acuerdo con el volumen de compra.</p></div><a className="button button-primary shrink-0" href={whatsappHref("Hola, me interesa una cotización de mayoreo de Productos Rivera.")} rel="noopener noreferrer" target="_blank">Solicitar cotización</a></div></div></section>
      </main>

      <footer className="bg-[#171614] py-10 text-[#e7e3dc]"><div className="page-container grid gap-9 md:grid-cols-[1fr_auto] md:items-end"><div><Image alt="Productos Rivera" className="h-auto w-[148px]" height={941} src="/images/white-rivera.png" width={1672} /><p className="mt-5 max-w-[31rem] text-sm leading-6 text-[#bdb8af]">Mango deshidratado de Escuinapa, Sinaloa.</p></div><div className="grid gap-3 text-sm md:text-right"><a className="font-semibold text-white transition-colors hover:text-[#f4c9c0]" href="mailto:prorisamexico@gmail.com">prorisamexico@gmail.com</a><div className="flex gap-5 md:justify-end"><a className="transition-colors hover:text-white" href="https://www.facebook.com/MangosRiveraDeEscuinapa/" rel="noopener noreferrer" target="_blank">Facebook</a><a className="transition-colors hover:text-white" href="https://www.instagram.com/mangos_rivera/" rel="noopener noreferrer" target="_blank">Instagram</a></div></div></div></footer>
    </div>
  );
}
