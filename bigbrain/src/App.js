import React from "react";

import "./App.sass";

import { MainContainer } from "./container/MainContainer";
import { ButtonPlus } from "./components/Button/ButtonMainPlus";

function App() {
  return (
    <div>
      <MainContainer />
      <ButtonPlus />
    </div>
  );
}

export default App;
