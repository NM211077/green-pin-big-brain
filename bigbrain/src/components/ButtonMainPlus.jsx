import React from "react";
import Button from "muicss/lib/react/button";

export function ButtonPlus(props) {
    const{onClickBtn}=props;
    return (
    <div className="btn-problem-block" align="center">
      <Button className="btn-problem" variant="raised" color="primary" onClick ={onClickBtn}>
        <p>Report a problem</p>
      </Button>
    </div>
  );
}
