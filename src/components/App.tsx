import React from "react";
import "../styles/components/App.scss";
import IntroHeader from "./IntroHeader";
import Menu from "./Menu";
import Order from "./Order";
import Social from "./Social";

function App() {
  return (
    <div className="App">
      <IntroHeader />
      <Menu />
      <Order />
      <Social />
    </div>
  );
}

export default App;
