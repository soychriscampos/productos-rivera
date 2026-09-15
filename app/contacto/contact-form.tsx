"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim() || "No indicado";
    const message = String(form.get("message") ?? "").trim();
    const whatsappMessage = [
      "Hola, me gustaría recibir información sobre los productos de Productos Rivera.",
      "",
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Teléfono: ${phone}`,
      `Mensaje: ${message}`,
    ].join("\n");
    const whatsappWindow = window.open(`https://wa.me/526959512141?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
    setNotice(whatsappWindow ? "Se abrió WhatsApp con tu mensaje preparado." : "Permite las ventanas nuevas para abrir WhatsApp.");
  }

  return (
    <form className="border-t border-[var(--line)] pt-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[var(--charcoal)]" htmlFor="contact-name">Nombre<input autoComplete="name" className="contact-input" id="contact-name" name="name" required type="text" /></label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--charcoal)]" htmlFor="contact-email">Correo electrónico<input autoComplete="email" className="contact-input" id="contact-email" name="email" required type="email" /></label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--charcoal)] sm:col-span-2" htmlFor="contact-phone">Teléfono <span className="font-normal text-[var(--muted)]">(opcional)</span><input autoComplete="tel" className="contact-input" id="contact-phone" name="phone" type="tel" /></label>
        <label className="grid gap-2 text-sm font-semibold text-[var(--charcoal)] sm:col-span-2" htmlFor="contact-message">Mensaje<textarea className="contact-input min-h-32 resize-y" id="contact-message" name="message" required /></label>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="button button-secondary" type="submit">Enviar mensaje</button>
        {notice ? <p aria-live="polite" className="text-sm leading-6 text-[var(--muted)]">{notice}</p> : null}
      </div>
    </form>
  );
}
