import React, {Component} from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

import {compose, withProps} from "recompose";


/*API KEY AIzaSyBIHu3UtN5LFuO9rEQuFLaSAiStv6VB3Qs*/
let icon;
let lat;
let lng;

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
        defaultCenter={{lat: 49.990159, lng: 36.233081}}
        onClick={props.onClickCreateMarker}
    >
        {
            props.isMarkerShown && <Marker
                position={{lat:props.position[0].lat, lng:props.position[1].lng}}
                icon={{url: require("../assets/icon/basemarker.png")}}/>
        }
        {
            props.pin.map(
                (elem) => (
                    elem.category === 1
                        ? icon = require("../assets/icon/chopping .png")
                        : elem.category === 2
                        ? icon = require("../assets/icon/dump.png")
                        : elem.category === 3
                        ? icon = require("../assets/icon/setFire.png")
                        : elem.category === 4
                        ? icon = require("../assets/icon/fire.png")
                        : elem.category === 5
                        ? icon = require("../assets/icon/quarry.png")
                        : elem.category === 6
                        ? icon = require("../assets/icon/constructionHouse.png")
                        : elem.category === 7
                        ? icon = require("../assets/icon/plants.png")
                        :elem.category === 8
                        ? icon = require("../assets/icon/poaching.png")
                        : icon = require("../assets/icon/basemarker.png"),

                    lat = Number(elem.lat),
                    lng = Number(elem.lng),

                     <Marker
                            key={props.pin.id}
                            position={{lat: lat, lng: lng}}
                            icon={{
                                url: icon,
                                scaledSize: new window.google.maps.Size(26, 32),
                            }}
                     />
                )
            )
        }
    </GoogleMap>
));
