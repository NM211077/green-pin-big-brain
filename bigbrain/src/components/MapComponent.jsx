import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import { compose, withProps } from "recompose";

/*API KEY AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs*/

export const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=weekly&key=AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs",

    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          position: `absolute`,
          height: `90vh`,
          left: `40px`,
          right: `40px`,
          top: `79px`,
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap zoom={13} defaultCenter={{ lat: 49.990159, lng: 36.233081 }} />
));
