import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=SUA_API_KEY_AQUI&callback=initMap'
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var markerPositionJose = new window.google.maps.LatLng(
      -2.5631228,
      -44.3561573
    );
    var markerPositionMaria = new window.google.maps.LatLng(
      -2.564326,
      -44.3548614
    );

    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -2.5636875, lng: -44.3563697 },
      zoom: 16,
      mapTypeId: 'satellite',
    });

    var markerJose = new window.google.maps.Marker({
      position: markerPositionJose,
      map: map,
      title: 'José',
    });

    var markerMaria = new window.google.maps.Marker({
      position: markerPositionMaria,
      map: map,
      title: 'Maria',
    });

    markerJose.setMap(map);
    markerMaria.setMap(map);

    return map;
  };

  render() {
    return (
      <>
        <div id="map"></div>
      </>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.defer = true;
  script.async = true;
  index.parentNode.insertBefore(script, index);
}

export default Home;
