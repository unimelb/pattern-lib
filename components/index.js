import GMaps from './map/gmaps';

const GMAPSJSAPIKEY = 'AIzaSyCN3Soebworjm6dilkDjyRapS0m4i-kfCI';

document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
  document.documentElement.classList.remove('no-js');

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
}

// GMaps callback
window.maps_loaded_go = function() {
  for (let recs = document.querySelectorAll('[data-latlng],[data-address]'), i=recs.length - 1; i >= 0; i--)
    new GMaps(recs[i], {counter: i});
};
