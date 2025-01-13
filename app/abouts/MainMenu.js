"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../custom_style/MainMenu.css";
import AudioPageMenuAndScene from "../components/AudioPageMenuAndScene";

function MenuButton() {
  const [continueButtonPage, setContinueButtonPage] = useState("#");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("unlockedChapter3") !== null) {
      setContinueButtonPage("/chapter3");
      setIsDisabled(false);
    } else if (sessionStorage.getItem("unlockedChapter2") !== null) {
      setContinueButtonPage("/chapter2");
      setIsDisabled(false);
    } else if (sessionStorage.getItem("unlockedChapter1") !== null) {
      setContinueButtonPage("/chapter1");
      setIsDisabled(false);
    } else {
      setContinueButtonPage("#");
      setIsDisabled(true);
    }

    // console.log(continueButtonPage);
    // console.log(isDisabled);
  }, []);

  return (
    <div className="button-container flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-center mt-10">
      {/* <button onClick={() => (window.location.href = "/scene_prologue")}>
        Start Game
      </button> */}

      {/* start game button */}
      <a href="/scene_prologue" className="p-4">
        <div className="relative w-48 h-24  hover:scale-105">
          <img src="/images/hori_card_h200.png" className="w-full h-full" />
          <span className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
            Start Game
          </span>
        </div>
      </a>
      {/* continue button */}
      <a
        href={continueButtonPage}
        className={`p-4 ${isDisabled ? "btn-disabled" : ""}`}
      >
        <div className="relative w-48 h-24 hover:scale-105">
          <img src="/images/hori_card_h200.png" className="w-full h-full" />
          <span className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
            Continue
          </span>
        </div>
      </a>

      {/* Encyclopedia Button */}
      <a href="/encyclopedia" className="p-4" id="">
        <div className="relative w-48 h-24 hover:scale-105">
          <img src="/images/hori_card_h200.png" className="w-full h-full" />
          <span className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
            Encyclopedia
          </span>
        </div>
      </a>

      {/* Recollection Button */}
      <a href="/recollection" className="p-4" id="">
        <div className="relative w-48 h-24 hover:scale-105">
          <img src="/images/hori_card_h200.png" className="w-full h-full" />
          <span className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
            Recollection
          </span>
        </div>
      </a>
    </div>
  );
}

export default function MainMenu() {
  return (
    <>
      <div>
        <AudioPageMenuAndScene currentScene={"MainMenu"} />
      </div>

      <div id="bodyMainMenu">
        <MenuButton />
      </div>
    </>
  );
}
