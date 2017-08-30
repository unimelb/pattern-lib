import 'classlist-polyfill';
import HeaderTools from './header-tools';
import FormSubmitHelper from './form-submit-helper';
import GMaps from './gmaps';
import DisableEmptyLinks from './disable-empty-links';

const GMAPSJSAPIKEY = 'AIzaSyCN3Soebworjm6dilkDjyRapS0m4i-kfCI';

document.addEventListener('DOMContentLoaded', initPage);

/**
 * Initialise page.
 */
function initPage() {
  document.documentElement.classList.remove('no-js');

  new HeaderTools();

  new FormSubmitHelper({
    el:   '.footer-search__submit',
    form: '#search'
  });

  if (document.querySelector('[data-latlng],[data-address]')) {
    if (typeof(google) === 'undefined') {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + GMAPSJSAPIKEY + "&callback=maps_loaded_go";
      document.body.appendChild(script);

    } else {
      maps_loaded_go();
    }
  }

  new DisableEmptyLinks();
}

// GMaps callback
window.maps_loaded_go = function() {
  for (let recs = document.querySelectorAll('[data-latlng],[data-address]'), i=recs.length - 1; i >= 0; i--)
    new GMaps(recs[i], {counter: i});
};
