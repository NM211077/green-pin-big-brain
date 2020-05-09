import React from "react";

import { MainContainer, HeaderContainer } from "./container/index.js";
import "./assets/style/index.sass";
import "./assets/icon/css/fontello.css";
import { InfoIconProblem } from "./components/index.js";

function App() {
  return (
    <div>
      <HeaderContainer />
      <MainContainer />
      {/* <InfoIconProblem /> */}
    </div>
  );
}

export default App;
