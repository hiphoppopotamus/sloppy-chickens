import React, { useState } from "react";
import "../styles/App.scss";
import logo from "../assets/images/title-logo.png";

function App() {
  const [introTitleText] = useState("sloppy chickens");
  const [introSubtitleText] = useState("好吃神经病");

  const introTitleCard = (
    <div className="title-card">
      <img className="intro__logo" src={logo} alt="Logo"></img>
      <p className="introheader__title">{introTitleText}</p>
      <p className="introheader__subtitle">{introSubtitleText}</p>
    </div>
  );

  // const introSubtitleCard = (
  //   <div className="subtitle-card">
  //     <p className="introheader__subtitle">{introSubtitleText}</p>
  //   </div>
  // );

  return (
    <div className="App">
      <div className="introheader introheader--wrapper">
        {introTitleCard}
        {/* {introSubtitleCard} */}
      </div>
      <div className="menu menu--wrapper">
        <p className="intro__text">{introTitleText}</p>
      </div>
      <div className="order order--wrapper">
        <p className="intro__text">{introTitleText}</p>
      </div>
      <div className="social social--wrapper">
        <p className="intro__text">{introTitleText}</p>
      </div>
    </div>
  );
}

export default App;
