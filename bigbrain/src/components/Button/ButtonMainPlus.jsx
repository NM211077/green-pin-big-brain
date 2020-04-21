import React from "react";
import Button from "react-bootstrap/Button";

// import "bootstrap/scss/bootstrap.scss";
// import "../../assets/style/index.sass";

export function ButtonPlus() {
  return (
    <div className="buttonPlus">
      <Button className="btnt" active="false">
        <p>Report a problem</p>
      </Button>
    </div>
  );
}
