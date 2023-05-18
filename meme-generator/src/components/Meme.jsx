import React from "react";

import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function generateMeme() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: allMemeImages[randomNumber].url,
      };
    });
  }

  console.log(meme);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <main>
      <div className="meme-input">
        <form action="" className="meme-form">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            className="form-top"
            placeholder="top text"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="form-bottom"
            placeholder="bottom text"
          />
        </form>
        <button className="meme-button" onClick={generateMeme}>
          Generate new meme page
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
