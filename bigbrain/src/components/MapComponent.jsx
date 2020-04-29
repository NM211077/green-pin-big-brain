import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { compose, withProps } from "recompose";

/*API KEY AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs*/
let icon;
let pos;
let posNum;

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
  <GoogleMap zoom={13} defaultCenter={{ lat: 49.990159, lng: 36.233081 }}>
    {props.pin.map(
      (elem) => (
        elem.category === 1
          ? (icon = "вырубка.png")
          : elem.category === 2
          ? (icon = "мусор.png")
          : elem.category === 3
          ? (icon = "костер.png")
          : elem.category === 4
          ? (icon = "огонь.png")
          : elem.category === 5
          ? (icon = "карьер.png")
          : elem.category === 6
          ? (icon = "СТРОЙКА.png")
          : elem.category === 7
          ? (icon = "растения.png")
          : elem.category === 8
          ? (icon = "браконьерство.png")
          : (icon = "base.png"),
        !Array.isArray(elem.geo)
          ? (pos = elem.geo.split(","))
          : (pos = elem.geo),
        (posNum = pos.map(function (item) {
          let number = Number(item);
          return isNaN(number) ? item : number;
        })),
        (
          <Marker
            key={props.pin.id}
            position={{ lat: posNum[0], lng: posNum[1] }}
            /*position ={{lat: elem.geo[0], lng: elem.geo[1]}}*/
            icon={{
              url: icon,
              scaledSize: new window.google.maps.Size(26, 32),
            }}
          />
        )
      )
    )}
  </GoogleMap>
));
