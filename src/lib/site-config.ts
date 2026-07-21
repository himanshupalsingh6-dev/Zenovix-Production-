// Central place for Zenovix Technologies contact details.
// Update here once and it propagates across the whole site.

export const CONTACT = {
  email: "Support.zenovix@gmail.com",
  primaryPhone: "+91 9258730561",
  primaryPhoneHref: "tel:+919258730561",
  whatsappNumber: "+91 9997874502",
  whatsappNumberDigits: "919997874502",
  addressLines: ["Zenovix Technologies", "Near Soron Gate", "Kasganj, Uttar Pradesh - 207123", "India"],
  addressShort: "Near Soron Gate, Kasganj, Uttar Pradesh - 207123",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Soron+Gate,+Kasganj,+Uttar+Pradesh+207123&output=embed",
  mapsLinkHref: "https://www.google.com/maps/search/?api=1&query=Soron+Gate,+Kasganj,+Uttar+Pradesh+207123",
} as const;

export const WHATSAPP_DEFAULT_MESSAGE = "Hello Zenovix Technologies, I would like to discuss my project.";

export function getWhatsappHref(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${CONTACT.whatsappNumberDigits}?text=${encodeURIComponent(message)}`;
}

export function getMailtoHref(subject?: string) {
  return subject ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}` : `mailto:${CONTACT.email}`;
}
