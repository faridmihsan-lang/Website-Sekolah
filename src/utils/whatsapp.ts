/**
 * Utilities for formatting WhatsApp phone numbers and links
 */
export function formatWhatsAppNumber(phone: string): string {
  let cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  } else if (!cleaned.startsWith('62') && cleaned.length > 0) {
    cleaned = '62' + cleaned;
  }
  return cleaned;
}

export function createWhatsAppUrl(phone: string, text: string): string {
  const cleanNumber = formatWhatsAppNumber(phone);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
