const CONSENT_KEY = 'cookie-consent';

export type ConsentStatus = 'accepted' | 'rejected' | null;

export function getCookieConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'rejected') {
    return value;
  }
  return null;
}

export function setCookieConsent(status: 'accepted' | 'rejected'): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, status);
}

export function hasConsent(): boolean {
  return getCookieConsent() === 'accepted';
}

export function clearConsent(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CONSENT_KEY);
}