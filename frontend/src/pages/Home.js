import React, { Component } from 'react';
import './Home.css';
import api from '../services/api';
//import { Tooltip } from '@material-ui/core';
import markerIcon from '../assets/marker.png';
import marker from '../assets/map-marker.png';

class Home extends Component {
  
  state = {
    employees: [],
    
  };
  
  async componentDidMount() {
    this.renderMap();
    const response = await api.get('/employees');
    this.setState({ employees: response.data });
    console.log(this.state);

    
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJq_W9lJN4NTNoQTXKoUuUxpW0QV8etKY&callback=initMap'
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
    const {employees} = this.state

    console.log(employees)
    let markerJose = new window.google.maps.Marker({
      
      position: markerPositionJose,
      map: map,
      title: `Name: ${employees.length}\nFirm: ${'VALE/SA'}`,
      icon:markerIcon
    });

    let markerMaria = new window.google.maps.Marker({
      position: markerPositionMaria,
      map: map,
      title: 'maria',
      icon:marker       
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
