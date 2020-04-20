import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { compose, withProps } from "recompose";

/*API KEY AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs
 With apiKey not working 
"https://maps.googleapis.com/maps/api/js?key=AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs=3.exp&libraries=geometry,drawing,places",*/

export const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 49.990159, lng: 36.233081 }}
  ></GoogleMap>
));
