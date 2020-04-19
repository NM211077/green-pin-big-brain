import React, { Component } from "react";

// import { GoogleMap } from "../components/MainMap/MainMap";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {
          lat: 50.025019,
          lng: 36.228515,
        },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  render() {
    console.log(this.props.google);

    return (
      <Map
        google={"https://api.google.com/some/script.js"}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 49.989, lng: 36.235 }}
      >
        <Marker position={{ lat: 49.989, lng: 36.235 }} /> || "Временно не
        доступно"
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCynkUuNtj3PZVtBa270xT81U2jP8H3rkk",
})(MapContainer);
