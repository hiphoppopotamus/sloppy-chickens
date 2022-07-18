import React, { useState } from "react";
import "../styles/components/IntroHeader.scss";
import logo from "../assets/images/title-logo.png";

function IntroHeader() {
  const [introTitleText] = useState("sloppy chickens");
  const [introSubtitleText] = useState("好吃神经病");

  const introTitleCard = (
    <div className="title-card">
      <img className="intro__logo" src={logo} alt="Logo"></img>
      <p className="introheader__title">{introTitleText}</p>
      <p className="introheader__subtitle">{introSubtitleText}</p>
    </div>
  );

  return (
    <div className="introheader introheader--wrapper">{introTitleCard}</div>
  );
}

export default IntroHeader;
