import React from "react";
import Button from "muicss/lib/react/button";

export function ButtonPlus() {
  return (
    <div className="btn-problem-block">
      <Button className="btn-problem" variant="raised" color="primary">
        <p>Report a problem</p>
      </Button>
    </div>
  );
}
