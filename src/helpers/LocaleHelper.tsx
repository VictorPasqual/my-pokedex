export function setLocale(locale: string) {
    localStorage.setItem('locale', locale);
}
  
export function getLocale() {
    return localStorage.getItem('locale') || 'pt';
}
  