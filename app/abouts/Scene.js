"use client";
import React, { useEffect, useRef } from "react";
import "../custom_style/Scene.css";
import AudioPageMenuAndScene from "../components/AudioPageMenuAndScene";

const items = [
  {
    id: 1,
    name: "prologue",
    type: "prologue",
    src: "/videos/story_prologue.mp4",
  },
  {
    id: 2,
    name: "bad_ending_1",
    type: "ending",
    src: "/videos/bad_ending_ch1.mp4",
  },
  {
    id: 3,
    name: "bad_ending_2",
    type: "ending",
    src: "/videos/bad_ending_ch2.mp4",
  },
  {
    id: 4,
    name: "bad_ending_3",
    type: "ending",
    src: "/videos/bad_ending_ch3.mp4",
  },
  {
    id: 5,
    name: "good_ending",
    type: "ending",
    src: "/videos/good_ending_ch3.mp4",
  },
  {
    id: 6,
    name: "true_ending",
    type: "ending",
    src: "/videos/true_ending_ch3.mp4",
  },
  {
    id: 7,
    name: "story_ch1",
    type: "story_ch1",
    src: "/videos/story_ch1.mp4",
  },
  {
    id: 8,
    name: "story_ch2",
    type: "story_ch2",
    src: "/videos/story_ch2.mp4",
  },
  {
    id: 9,
    name: "hidden_ending",
    type: "ending",
    src: "/videos/hidden_ending_ch3.mp4",
  },
];

export default function Scene({ sceneName, isRecollection }) {
  const videoRef = useRef(null);

  // Dapatkan index berdasarkan sceneName
  const index = items.findIndex((item) => item.name === sceneName);

  let btnAction = manageBtnAction(items[index], isRecollection);
  let currentScene = getCurrentScene(items[index]);

  useEffect(() => {
    saveScene(items[index].name.toString());

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <AudioPageMenuAndScene currentScene={currentScene} />

      <div id="videoContainer">
        {index !== -1 ? (
          <video ref={videoRef} id="myVideo" muted>
            <source src={items[index].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video not found!</p>
        )}

        <a href={btnAction.nextPage} className="btn_custom">
          {btnAction.message}
        </a>
      </div>
    </>
  );
}

function getCurrentScene(item) {
  let currentScene = "";

  switch (item.type) {
    case "prologue":
      currentScene = "Prologue";
      break;
    case "ending":
      currentScene = "Ending";
      break;
    case "story_ch1":
      currentScene = "Story1";
      break;
    case "story_ch2":
      currentScene = "Story2";
      break;
    default:
      currentScene = "MainMenu";
      break;
  }

  return currentScene;
}

function manageBtnAction(item, isRecollection) {
  // console.log(item);
  let btnAction = {
    nextPage: "/recollection",
    message: "Back",
  };

  if (!isRecollection) {
    if (item.type !== "ending") {
      btnAction.message = "Continue";

      if (item.type == "prologue") {
        btnAction.nextPage = "/chapter1";
      } else if (item.type == "story_ch1") {
        btnAction.nextPage = "/chapter2";
      } else if (item.type == "story_ch2") {
        btnAction.nextPage = "/chapter3";
      } else {
        btnAction.nextPage = "/";
      }
    } else {
      btnAction.nextPage = "/";
      btnAction.message = "Main Menu";
    }
  }

  return btnAction;
}
function saveScene(string) {
  if (sessionStorage.getItem(string) === null) {
    sessionStorage.setItem(string, true);
  }
}
