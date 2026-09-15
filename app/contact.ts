export const whatsappMessages = {
  en: "Hello, I would like to receive information about Productos Rivera products.",
  es: "Hola, me gustaría recibir información sobre los productos de Productos Rivera.",
} as const;

type ContactLocale = keyof typeof whatsappMessages;

export function getWhatsappHref(locale: ContactLocale = "es") {
  return `https://wa.me/526959512141?text=${encodeURIComponent(whatsappMessages[locale])}`;
}
