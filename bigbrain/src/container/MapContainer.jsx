// import React, { Component } from "react";

// // import { GoogleMap } from "../components/MainMap/MainMap";

// // import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// import { Map, Marker, GoogleApiWrapper } from "react-google-maps";

// import { connect } from "react-redux";

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

// class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stores: [
//         {
//           lat: 50.025019,
//           lng: 36.228515,
//         },
//       ],
//     };
//     console.log(props);
//   }

//   displayMarkers = () => {
//     return this.state.stores.map((store, index) => {
//       return (
//         <Marker
//           key={index}
//           id={index}
//           position={{
//             lat: store.latitude,
//             lng: store.longitude,
//           }}
//           onClick={() => console.log("You clicked me!")}
//         />
//       );
//     });
//   };
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 49.989, lng: 36.235 }}
//       >
//         <Marker position={{ lat: 49.989, lng: 36.235 }} /> || "Временно не
//         доступно"
//       </Map>
//     );
//   }
// }

// export default connect(null)(
//   GoogleApiWrapper({
//     apiKey: "",
//   })(MapContainer)
// );

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCynkUuNtj3PZVtBa270xT81U2jP8H3rkk",
// })(MapContainer);

import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { compose, withProps } from "recompose";

// const DocsApiKeyInput = require("./DocsApiKeyInput").default;

{
  /* <DocsApiKeyInput />; */
}

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
  >
    {props.isMarkerShown && (
      <Marker
        zoom={8}
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }
