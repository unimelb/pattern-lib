import { version } from '../../package.json';

export default function initTracking() {
  window.utag_data = window.utag_data || {};
  window.utag_data.uom_version = version;
  const script = document.createElement('script');
  script.src = 'https://tags.tiqcdn.com/utag/unimelb/main/prod/utag.js';
  document.head.appendChild(script);
}
