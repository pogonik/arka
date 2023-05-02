export let lang = 'sr-rs';

// export const base_url = 'https://www.arkaizgradnja.com';
export const base_url = 'localhost:3000';

export const siteName = {
  'sr-rs': 'ARKA - Izgradnja i adaptacija',
  'en-us': 'ARKA - Construction & Real Estate Development'
}

export const langs = {
  'sr-rs': {
    code: 'sr-rs',
    shortCode: 'sr',
    locale: 'sr_RS',
    name: 'Srpski',
  },
  'en-us': {
    code: 'en-us',
    shortCode: 'en',
    locale: 'en_US',
    name: 'English',
  }
}

export function encodeHTMLEntities(str){
  return str.replace(/[^]/g, str => `&#${str.charCodeAt(0)};`);
}

export function decodeHTMLEntities(str) {
  return str.replace(/&#(\d+);/g, ((e,i) => `${String.fromCharCode(i)}`));
}
