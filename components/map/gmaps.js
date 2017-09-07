export default class GMaps {
  constructor(el, props) {
    this.el = el;
    this.props = props;

    this.props.width = parseInt(this.el.getAttribute('data-width')) || 400;
    this.props.height = parseInt(this.el.getAttribute('data-height')) || 300;
    this.props.zoom = parseInt(this.el.getAttribute('data-zoom')) || 17;
    this.props.pins = this.el.getAttribute('data-pin');

    if (this.el.hasAttribute('data-address'))
      this.geolookup();

    else if (this.el.hasAttribute('data-latlng')) {
      const [lat, lng] = this.el.getAttribute('data-latlng').split(',');
      this.props.center = new google.maps.LatLng(lat, lng);
      this.props.options = {
        center:      this.props.center,
        zoom:        this.props.zoom,
        scrollwheel: false,
        mapTypeId:   google.maps.MapTypeId.ROADMAP
      };
      this.draw();
    }

    window.addEventListener('resize', this.redraw.bind(this));
  }

  redraw() {
    if (this.props.center)
      this.map.panTo(this.props.center);
  }

  draw() {
    this.el.style.width = this.props.width + 'px';
    this.el.style.height = this.props.height + 'px';

    this.map = new google.maps.Map(this.el, this.props.options);

    const styleOptions = [{
      stylers: [{ hue: '#203D65' }, { saturation: -80 }]
    }];
    const styledMap = new google.maps.StyledMapType(styleOptions, { name: 'Styled Map' });
    this.map.mapTypes.set('map_style', styledMap);
    this.map.setMapTypeId('map_style');

    if (this.props.pins) {
      this.markers();
    }
  }

  geolookup() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.el.getAttribute('data-address') }, this.handleResult.bind(this));
  }

  handleResult(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      this.props.center = results[0].geometry.location;
      this.props.options = {
        center:      this.props.center,
        zoom:        this.props.zoom,
        scrollwheel: false,
        mapTypeId:   google.maps.MapTypeId.ROADMAP
      };
      this.draw();
    }
  }

  markers() {
    const pins = this.props.pins.split('|');
    for (let i = pins.length - 1; i >= 0; i--) {
      let ll = pins[i].split(',');
      new google.maps.Marker({
        map:      this.map,
        position: new google.maps.LatLng(ll[0], ll[1])
      });
    }
  }
}
