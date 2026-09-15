import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "../components/mobile-navigation";
import { getWhatsappHref } from "../contact";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#productos", label: "Productos" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

const values = ["Responsabilidad social y ambiental", "Respeto", "Honestidad", "Calidad"];

export default function NosotrosPage() {
  return (
    <div className="min-h-full overflow-hidden bg-[var(--mineral)]">
      <header className="relative z-30 border-b border-[var(--line)] bg-[var(--mineral)]">
        <div className="page-container flex h-[72px] items-center justify-between gap-5">
          <Link aria-label="Productos Rivera, inicio" className="shrink-0" href="/">
            <Image alt="Productos Rivera" className="h-auto w-[124px] sm:w-[142px]" height={205} priority src="/images/productos-rivera-logo.png" width={463} />
          </Link>
          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-semibold text-[var(--charcoal)]">
              {navItems.map((item) => <li key={item.href}><Link aria-current={item.href === "/nosotros" ? "page" : undefined} className="transition-colors hover:text-[var(--rivera-red)]" href={item.href}>{item.label}</Link></li>)}
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
        <section className="page-container grid gap-8 py-10 md:py-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:py-20">
          <div className="flex flex-col justify-between lg:py-4">
            <div>
              <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Productos Rivera de Escuinapa</p>
              <h1 className="mt-5 max-w-[10ch] text-[clamp(3.1rem,6vw,5.7rem)] font-semibold leading-[.94] tracking-[-.06em] text-[var(--charcoal)]">Nuestra historia nace del mango.</h1>
            </div>
            <p className="mt-8 max-w-[38ch] text-lg leading-8 text-[var(--muted)] lg:mt-12">Empresa mexicana productora y comercializadora de mango orgánico deshidratado.</p>
          </div>
          <figure className="relative aspect-[1.25/1] overflow-hidden bg-[var(--charcoal)] sm:aspect-[1.5/1] lg:aspect-auto lg:min-h-[550px]">
            <Image alt="Mango de Productos Rivera" className="object-cover" fill priority quality={88} sizes="(max-width: 1023px) 100vw, 56vw" src="/images/nosotros-origen.jpg" />
            <figcaption className="absolute bottom-0 left-0 bg-[var(--mineral)] px-4 py-3 text-xs font-semibold text-[var(--charcoal)] sm:px-5">Escuinapa, Sinaloa</figcaption>
          </figure>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-16 md:py-24">
          <div className="page-container grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
            <p className="text-[clamp(4.25rem,9vw,8rem)] font-semibold leading-[.8] tracking-[-.08em] text-[var(--rivera-red)]">1970</p>
            <div className="max-w-3xl">
              <h2 className="text-[clamp(2.35rem,4.5vw,4.4rem)] font-semibold leading-[.98] tracking-[-.055em] text-[var(--charcoal)]">Una trayectoria que empieza en Escuinapa.</h2>
              <div className="mt-8 grid gap-5 text-base leading-7 text-[var(--muted)] md:grid-cols-2">
                <p>Nuestra historia comienza en los años setenta. Los mangos de la región se enviaban frescos a Estados Unidos, donde eran vistos como una fruta exótica que conquistó por su sabor.</p>
                <p>Con el tiempo, Productos Rivera siguió cosechando mango fresco de la región para deshidratarlo mediante un proceso perfeccionado a lo largo de los años.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-container grid gap-8 py-16 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <figure className="relative aspect-[4/3] overflow-hidden bg-[var(--charcoal)]">
            <Image alt="Mango de Productos Rivera listo para su presentación" className="object-cover" fill quality={86} sizes="(max-width: 1023px) 100vw, 52vw" src="/images/nosotros-mango.jpg" />
          </figure>
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Origen</p>
            <h2 className="mt-4 text-[clamp(2.35rem,4vw,4.2rem)] font-semibold leading-[.98] tracking-[-.05em] text-[var(--charcoal)]">Del campo de Escuinapa a un mango deshidratado.</h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">La selección comienza desde el campo, con la materia prima que ofrece la región, para ofrecer un producto natural y 100% orgánico.</p>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-16 md:py-24">
          <div className="page-container">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(2.35rem,4vw,4.2rem)] font-semibold leading-[.98] tracking-[-.05em] text-[var(--charcoal)]">Calidad e inocuidad como forma de trabajo.</h2>
            </div>
            <div className="mt-10 grid gap-0 border-t border-[var(--line)] lg:grid-cols-2">
              <article className="py-8 lg:pr-12 lg:py-10">
                <p className="text-sm font-bold text-[var(--rivera-red)]">Misión</p>
                <p className="mt-4 max-w-[58ch] text-base leading-7 text-[var(--muted)]">Ser una empresa 100% orgánica, asegurando la calidad e inocuidad de sus productos al seguir lineamientos, normativas y estándares de certificación nacionales e internacionales.</p>
              </article>
              <article className="border-t border-[var(--line)] py-8 lg:border-l lg:border-t-0 lg:py-10 lg:pl-12">
                <p className="text-sm font-bold text-[var(--rivera-red)]">Visión</p>
                <p className="mt-4 max-w-[58ch] text-base leading-7 text-[var(--muted)]">Ser reconocida nacional e internacionalmente como una empresa deshidratadora de mango por el sabor, la calidad y la inocuidad de sus productos y procesos de producción.</p>
              </article>
            </div>
            <div className="grid border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => <p className={`py-5 text-base font-semibold tracking-[-.02em] text-[var(--charcoal)] ${index > 0 ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`} key={value}>{value}</p>)}
            </div>
          </div>
        </section>

        <section className="page-container grid gap-8 py-16 md:py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Del mango al producto</p>
            <h2 className="mt-4 text-[clamp(2.35rem,4vw,4.2rem)] font-semibold leading-[.98] tracking-[-.05em] text-[var(--charcoal)]">Selección desde el campo.</h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">Productos Rivera describe una selección de la fruta desde el campo y un proceso de deshidratación que se ha perfeccionado con los años.</p>
          </div>
          <figure className="relative aspect-[1.5/1] overflow-hidden bg-[var(--charcoal)]">
            <Image alt="Proceso de presentación de mango Productos Rivera" className="object-cover" fill quality={86} sizes="(max-width: 1023px) 100vw, 55vw" src="/images/nosotros-proceso.jpg" />
          </figure>
        </section>

        <section className="bg-[var(--charcoal)] py-16 text-white md:py-24">
          <div className="page-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold tracking-[.02em] text-[#f4c9c0]">Certificaciones</p>
              <h2 className="mt-4 max-w-[10ch] text-[clamp(2.4rem,4.5vw,4.6rem)] font-semibold leading-[.98] tracking-[-.055em]">Referencias de calidad.</h2>
            </div>
            <div className="border-t border-white/25">
              <Certification description="Programa de auditoría reconocido por la GFSI, orientado a criterios de buenas prácticas de manufactura y producción segura de alimentos." name="PrimusGFS" />
              <Certification description="Instituto acreditado por USDA para certificar cultivos, productos y manufactura orgánica." name="OTCO · Oregon Tilth Certified Organic" />
              <Certification description="Sistema de control de calidad de alimentos según normas kosher, con supervisión en planta para ciertos lotes." name="Kosher" />
            </div>
          </div>
        </section>

        <section className="page-container py-16 md:py-24">
          <div className="border-y border-[var(--line)] py-10 md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:py-14">
            <div>
              <p className="text-sm font-bold tracking-[.02em] text-[var(--rivera-red)]">Productos Rivera</p>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(2.45rem,5vw,4.8rem)] font-semibold leading-[.97] tracking-[-.06em] text-[var(--charcoal)]">Conoce nuestros productos.</h2>
              <p className="mt-5 max-w-[42ch] text-base leading-7 text-[var(--muted)]">Solicita información sobre productos y presentaciones por WhatsApp.</p>
            </div>
            <a className="button button-primary mt-8 md:mt-0" href={getWhatsappHref("es")} rel="noopener noreferrer" target="_blank">Escríbenos por WhatsApp</a>
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
      </footer>
    </div>
  );
}

function Certification({ description, name }: { description: string; name: string }) {
  return (
    <article className="grid gap-3 border-b border-white/25 py-7 sm:grid-cols-[minmax(11rem,.72fr)_1fr] sm:gap-8">
      <h3 className="text-xl font-semibold tracking-[-.03em] text-white">{name}</h3>
      <p className="text-sm leading-6 text-[#ddd8d0]">{description}</p>
    </article>
  );
}
