/** WhatsApp contact number in international format (no '+'), and the default prefilled message. */
export const WHATSAPP_NUMBER = '917051732616';
export const WHATSAPP_MESSAGE = 'Hey Umar, I have a Project.';

/** Builds a wa.me deep link that opens WhatsApp directly with the message prefilled. */
export const getWhatsAppLink = (
  message: string = WHATSAPP_MESSAGE,
  number: string = WHATSAPP_NUMBER
): string => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
