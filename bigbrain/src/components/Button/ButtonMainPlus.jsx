import React from "react";
import Button from "muicss/lib/react/button";

import st from "./ButtonPlus.module.css";

export function ButtonPlus() {
  return (
    <div className={st.buttonPlus}>
      <Button className={st.btn} variant="raised" color="primary">
        <p>Report a problem</p>
      </Button>
    </div>
  );
}
