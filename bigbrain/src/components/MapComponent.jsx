import React, {Component} from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { compose, withProps } from "recompose";

import { InfoIconProblem } from "./index";

/*API KEY AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs*/
let icon;

export const MapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?v=weekly&key=AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs",

        loadingElement: <div style={{height: `100%`}}/>,
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
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
  <GoogleMap
      zoom={13}
      defaultCenter={{ lat: 49.990159, lng: 36.233081 }}
      onClick={props.onClickCreateMarker}
  >
      {props.isMarkerShown && <Marker
              position={{lat:props.position.lat, lng:props.position.lng}}
              icon={{url: require("../assets/icon/basemarker.png")}}/>
      }
    { props.pin.map(
      (elem) => (
        elem.category === 1
          ? (icon = require("../assets/icon/cuttingDown.png"))
          : elem.category === 2
          ? (icon = require("../assets/icon/dump.png"))
          : elem.category === 3
          ? (icon = require("../assets/icon/setFire.png"))
          : elem.category === 4
          ? (icon = require("../assets/icon/fire.png"))
          : elem.category === 5
          ? (icon = require("../assets/icon/quarry.png"))
          : elem.category === 6
          ? (icon = require("../assets/icon/constructionHouse.png"))
          : elem.category === 7
          ? (icon = require("../assets/icon/plants.png"))
          : elem.category === 8
          ? (icon = require("../assets/icon/poaching.png"))
          : (icon = require("../assets/icon/base.png")),
          <Marker
            key={elem.id}
            position={{lat:elem.location.lat_loc , lng: elem.location.lng_loc}}
            icon={{
                url: icon,
                scaledSize: new window.google.maps.Size(26, 32),
            }}
            onClick={props.handleClickInfoIcon.bind(elem, elem.id)}
          />
        )
      )
    }
    {props.showInfoIcon && (
      <InfoIconProblem
        handleClickInfoIcon={props.handleClickInfoIcon}
        pin={props.pin}
        categoryId={props.categoryId}
        key={props.key}
        removeMarker={props.onToggleShow.bind(this)}
      />
    )}
  </GoogleMap>
));
