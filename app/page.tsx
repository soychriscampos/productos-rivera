import Image from "next/image";
import Link from "next/link";
import { getWhatsappHref } from "./contact";
import { HeroCarousel } from "./components/hero-carousel";
import { MobileNavigation } from "./components/mobile-navigation";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

const products = [
  { title: "Mango natural", description: "Mango deshidratado natural en presentaciones de 40 g y 250 g." },
  { title: "Mango con chile", description: "Mango deshidratado con chile en presentaciones de 40 g y 250 g." },
  { title: "Empaques disponibles", description: "Presentaciones biodegradables y de celofán según la variedad." },
];

const galleryImages = [
  { src: "/images/mango-producto-origen.jpg", alt: "Mango deshidratado Productos Rivera junto a mango fresco", className: "md:row-span-2" },
  { src: "/images/mango-galeria-fruta.jpg", alt: "Detalle de mango deshidratado natural Productos Rivera", className: "" },
  { src: "/images/mango-galeria-mesa.jpg", alt: "Presentación de mango deshidratado sobre mesa de madera", className: "" },
  { src: "/images/mango-natural-cuenco.jpg", alt: "Mango deshidratado natural en un cuenco de madera", className: "md:col-span-2" },
  { src: "/images/mango-presentacion-circular.jpg", alt: "Composición de mango deshidratado Productos Rivera", className: "" },
  { src: "/images/mango-detalle-circular.jpg", alt: "Mango fresco y mango deshidratado en composición cenital", className: "" },
];

export default function Home() {
  return (
    <div className="min-h-full overflow-hidden bg-[var(--mineral)]">
      <header className="relative z-30 border-b border-[var(--line)] bg-[var(--mineral)]">
        <div className="page-container flex h-[72px] items-center justify-between gap-5">
          <Link aria-label="Productos Rivera, inicio" className="shrink-0" href="#inicio">
            <Image alt="Productos Rivera" className="h-auto w-[124px] sm:w-[142px]" height={205} priority src="/images/productos-rivera-logo.png" width={463} />
          </Link>
          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-semibold text-[var(--charcoal)]">
              {navItems.map((item) => <li key={item.href}><Link className="transition-colors hover:text-[var(--rivera-red)]" href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <button aria-label="Cambiar idioma, español seleccionado" className="text-sm font-bold text-[var(--charcoal)] underline decoration-[var(--rivera-red)] decoration-2 underline-offset-4" type="button">ES</button>
            <span aria-hidden="true" className="text-[var(--line)]">/</span>
            <button aria-label="Cambiar a inglés" className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--rivera-red)]" type="button">EN</button>
            <a className="button button-primary header-contact" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">WhatsApp</a>
            <MobileNavigation />
          </div>
        </div>
      </header>

      <main>
        <HeroCarousel />

        <section className="page-container py-16 md:py-28" id="nosotros">
          <div className="max-w-4xl">
            <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Productos Rivera de Escuinapa</p>
            <h2 className="mt-5 text-[clamp(2.65rem,5vw,5rem)] font-semibold leading-[.97] tracking-[-.05em] text-[var(--charcoal)]">La mejor selección de mangos.</h2>
            <p className="mt-7 max-w-3xl text-[clamp(1.15rem,2vw,1.55rem)] leading-9 text-[var(--muted)]">Nuestra historia comienza en los años setenta en Escuinapa, Sinaloa. Desde entonces, cosechamos mangos de la región y los transformamos en mango deshidratado.</p>
          </div>
          <div className="mt-12 grid gap-6 border-t border-[var(--line)] pt-6 text-sm leading-6 text-[var(--muted)] md:grid-cols-3">
            <p><strong className="font-bold text-[var(--charcoal)]">55 años de calidad y sabor</strong> nos respaldan.</p>
            <p>Empresa mexicana productora y comercializadora de mango orgánico deshidratado.</p>
            <p>Origen, selección de fruta y producto terminado, reunidos en una misma historia.</p>
          </div>
        </section>

        <section className="relative min-h-[52vw] max-h-[720px] overflow-hidden bg-[var(--charcoal)]">
          <Image alt="Mango fresco y mango deshidratado en una composición de Productos Rivera" className="object-cover" fill quality={88} sizes="100vw" src="/images/mango-detalle-circular.jpg" />
        </section>

        <section className="page-container py-16 md:py-24" id="productos">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Productos</p>
            <h2 className="mt-4 text-[clamp(2.35rem,4vw,4rem)] font-semibold leading-[1] tracking-[-.045em] text-[var(--charcoal)]">Mango natural y mango con chile.</h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">Mango orgánico deshidratado en presentaciones para compartir, distribuir y disfrutar.</p>
          </div>
          <ol className="mt-12 grid border-t border-[var(--line)] md:grid-cols-3">
            {products.map((product, index) => (
              <li className={`py-8 md:px-7 md:py-10 ${index > 0 ? "border-t border-[var(--line)] md:border-l md:border-t-0" : ""}`} key={product.title}>
                <h3 className="text-2xl font-semibold tracking-[-.03em] text-[var(--charcoal)]">{product.title}</h3>
                <p className="mt-3 max-w-[27ch] text-sm leading-6 text-[var(--muted)]">{product.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-16 md:py-24" aria-labelledby="certificaciones-title">
          <div className="page-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Certificaciones</p>
              <h2 className="mt-4 max-w-[13ch] text-[clamp(2.2rem,3.6vw,3.5rem)] font-semibold leading-[1] tracking-[-.04em] text-[var(--charcoal)]" id="certificaciones-title">Calidad e inocuidad respaldadas.</h2>
            </div>
            <div className="border-t border-[var(--line)]">
              <Certification name="PrimusGFS" />
              <Certification name="OTCO, Oregon Tilth Certified Organic" />
              <Certification name="Kosher" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" id="galeria">
          <div className="page-container">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Galería</p>
              <h2 className="mt-4 text-[clamp(2.35rem,4vw,4rem)] font-semibold leading-[1] tracking-[-.045em] text-[var(--charcoal)]">Mango, oficio y sabor.</h2>
            </div>
            <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
              {galleryImages.map((image) => (
                <figure className={`relative overflow-hidden bg-[var(--charcoal)] ${image.className}`} key={image.src}>
                  <Image alt={image.alt} className="object-cover" fill quality={82} sizes="(min-width: 1280px) 320px, (min-width: 768px) 25vw, 50vw" src={image.src} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--charcoal)] py-16 text-white md:py-24" id="contacto">
          <div className="page-container grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[.02em] text-[#f4c9c0]">Productos Rivera</p>
              <h2 className="mt-4 max-w-[15ch] text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[.98] tracking-[-.05em]">Pide el mejor mango orgánico deshidratado.</h2>
              <p className="mt-6 max-w-[38rem] text-base leading-7 text-[#ddd8d0]">Solicita información sobre productos y presentaciones. También manejamos mayoreo por kilos y palets.</p>
            </div>
          <a className="button border border-white bg-white text-[var(--charcoal)] transition-colors hover:bg-[#f1eee8] lg:justify-self-end" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">Contáctanos</a>
          </div>
        </section>
      </main>

      <footer className="bg-[#171614] py-10 text-[#e7e3dc]">
        <div className="page-container grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Image alt="Productos Rivera" className="h-auto w-[148px]" height={941} src="/images/white-rivera.png" width={1672} />
            <p className="mt-5 max-w-[31rem] text-sm leading-6 text-[#bdb8af]">Mango deshidratado de Escuinapa, Sinaloa.</p>
          </div>
          <div className="grid gap-3 text-sm md:text-right">
            <a className="font-semibold text-white transition-colors hover:text-[#f4c9c0]" href="mailto:prorisamexico@gmail.com">prorisamexico@gmail.com</a>
            <div className="flex gap-5 md:justify-end">
              <a className="transition-colors hover:text-white" href="https://www.facebook.com/MangosRiveraDeEscuinapa/" rel="noopener noreferrer" target="_blank">Facebook</a>
              <a className="transition-colors hover:text-white" href="https://www.instagram.com/mangos_rivera/" rel="noopener noreferrer" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
        <div className="page-container mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-[#bdb8af] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Productos Rivera. Todos los derechos reservados.</p>
          <p>Aviso de privacidad próximamente.</p>
        </div>
      </footer>
    </div>
  );
}

function Certification({ name }: { name: string }) {
  return <p className="border-b border-[var(--line)] py-5 text-lg font-semibold tracking-[-.02em] text-[var(--charcoal)]">{name}</p>;
}
