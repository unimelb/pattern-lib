import { version } from '../../package.json';

export default function () {
  // === GTM ===
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  // === Tealium ===
  window.utag_data = window.utag_data || {};
  window.utag_data.uom_version = version;

  // Load GTM and Tealium scripts
  [
    'https://www.googletagmanager.com/gtm.js?id=GTM-7JB9',
    'https://tags.tiqcdn.com/utag/unimelb/main/prod/utag.js',
  ].forEach((src) => {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  });
}
