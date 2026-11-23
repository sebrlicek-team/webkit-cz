/** Validate an eight-digit Czech company identification number (IČO). */
export function isValidICO(input: string): boolean {
  if (!/^\d{8}$/.test(input)) return false;
  const sum = [...input.slice(0, 7)].reduce((acc, digit, index) => acc + Number(digit) * (8 - index), 0);
  const remainder = (11 - (sum % 11)) % 11;
  const check = remainder === 10 ? 0 : remainder;
  return Number(input[7]) === check;
}

/** Validate the shape of a Czech postal code; this does not check actual assignment. */
export function isValidPSC(input: string): boolean {
  return /^\d{3} ?\d{2}$/.test(input);
}

/** Normalize a Czech postal code to XXX XX, or return null. */
export function formatPSC(input: string): string | null {
  if (!isValidPSC(input)) return null;
  const digits = input.replace(/ /g, "");
  return `${digits.slice(0, 3)} ${digits.slice(3)}`;
}

/** Validate Czech domestic (+420 optional) phone number syntax, not number allocation. */
export function isValidCzechPhone(input: string): boolean {
  const compact = input.replace(/[ -]/g, "");
  return /^(?:\+420)?[1-9]\d{8}$/.test(compact);
}

/** Format a Czech phone number as +420 XXX XXX XXX, or return null. */
export function formatCzechPhone(input: string): string | null {
  if (!isValidCzechPhone(input)) return null;
  const compact = input.replace(/[ -]/g, "").replace(/^\+420/, "");
  return `+420 ${compact.slice(0, 3)} ${compact.slice(3, 6)} ${compact.slice(6)}`;
}

/** Validate basic Czech VAT ID syntax; does not confirm registration or tax validity. */
export function isValidDIC(input: string): boolean {
  return /^CZ(?:\d{8,10})$/.test(input);
}
