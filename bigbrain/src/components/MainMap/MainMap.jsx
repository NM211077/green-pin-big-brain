import React from "react";
// import Iframe from "react-iframe";

// import st from "./MainMap.module.css";

export function MainMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d41046.68322611494!2d36.2302106!3d49.9847778!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1587008952633!5m2!1sru!2sua"
      style={{
        //  allowfullscreen = "" ,
        tabindex: "0",
        frameborder: "0",
        ariahidden: "false",
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  );
}
