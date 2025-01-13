import React, { memo, useEffect, useRef, useState } from "react";

const AudioPageMenuAndScene = memo(
  ({ currentScene }) => {
    const [isMuted, setIsMuted] = useState(false);
    const bgmRef = useRef(null);

    // Cek apakah currentScene sama dengan yang ada di sessionStorage
    useEffect(() => {
      const audioSrc = setSrc(currentScene);

      if (bgmRef.current) {
        bgmRef.current.src = audioSrc;
        bgmRef.current.loop = true;

        const handleLoadedData = () => {
          bgmRef.current
            .play()
            .catch((error) => console.log("Pemutaran audio gagal:", error));
        };

        bgmRef.current.addEventListener("loadeddata", handleLoadedData);

        return () => {
          if (bgmRef.current) {
            bgmRef.current.removeEventListener("loadeddata", handleLoadedData);
          }
        };
      }
    }, [currentScene]);

    // Cek mute status dari sessionStorage
    useEffect(() => {
      const savedMuteStatus = sessionStorage.getItem("isMuted");
      if (savedMuteStatus !== null) {
        setIsMuted(savedMuteStatus === "true");
      }
    }, []);

    // Perbarui status mute
    useEffect(() => {
      if (bgmRef.current) {
        bgmRef.current.muted = isMuted;
      }
    }, [isMuted]);

    const toggleMute = () => {
      const newMuteStatus = !isMuted;
      setIsMuted(newMuteStatus);
      sessionStorage.setItem("isMuted", newMuteStatus.toString());

      if (bgmRef.current) {
        bgmRef.current.muted = newMuteStatus;
      }
    };

    return (
      <>
        <audio id="backgroundMusic" ref={bgmRef} />

        <button id="muteButton" onClick={toggleMute}>
          {isMuted ? "🔈" : "🔊"}
        </button>
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.currentScene === nextProps.currentScene;
  }
);

function setSrc(currentScene) {
  const parentPath = "/audios/musics/";
  let bgmScene = "";

  switch (currentScene) {
    case "MainMenu":
      bgmScene = "Main_Menu.mp3";
      break;
    case "Prologue":
      bgmScene = "Prologue.mp3";
      break;
    case "Story1":
      bgmScene = "Story1.mp3";
      break;
    case "Story2":
      bgmScene = "Story2.mp3";
      break;
    case "Ending":
      bgmScene = "Ending.mp3";
      break;
    case "Encyclopedia":
      bgmScene = "Other_Menu.mp3";
      break;
    case "Recollection":
      bgmScene = "Other_Menu.mp3";
      break;
    default:
      bgmScene = "Main_Menu.mp3";
      break;
  }

  return parentPath + bgmScene;
}

export default AudioPageMenuAndScene;
