import React from "react";
import TrollFace from "../assets/meme-icon.png";
export default function Header() {
  return (
    <header>
      <img src={TrollFace} alt="logo for site" className="site-logo" />
      <h1 className="header-middle">Meme Generator</h1>
      <h1 className="header-right">A Zhang</h1>
    </header>
  ); //html tags not suppose to be capitalized! thats why component could not render.
}
