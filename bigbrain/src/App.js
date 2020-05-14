import React from "react";

import { MainContainer, HeaderContainer } from "./container/index.js";
import "./assets/style/index.sass";
import "./assets/icon/css/fontello.css";
import { InfoIconProblem, LogInPage } from "./components/index.js";

function App() {
  return (
    <div>
      <HeaderContainer />
      <LogInPage />
      {/* <MainContainer /> */}
    </div>
  );
}

export default App;
