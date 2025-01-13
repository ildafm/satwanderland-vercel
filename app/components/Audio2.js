// untuk audio
import React, { useEffect, useRef, useState, memo } from "react";

const Audio = memo(
  ({ isGameStarted, animalName, winLose, currentStage }) => {
    let currentMuteStatus = sessionStorage.getItem("isMuted");

    const [isMuted, setIsMuted] = useState(toBoolean(currentMuteStatus));
    const bgmRef = useRef(null);
    const animalRef = useRef(null);

    const parentPath = "/audios/musics/";
    const parentPathAnimalSound = "/audios/animals/";

    let animalSoundSrc = `${parentPathAnimalSound}${animalName}.mp3`;
    let audioSrc = parentPath + "Chapter_Begin.mp3";

    // use effect untuk memulai bgm musik jika game dimulai (pertama kali klik kartu)
    // Periksa status mute saat komponen dimuat
    useEffect(() => {
      // Cek apakah "isMuted" sudah ada di sessionStorage
      if (sessionStorage.getItem("isMuted") === null) {
        // Jika belum ada, set nilai default "false"
        sessionStorage.setItem("isMuted", false);
      } else {
        setIsMuted(toBoolean(currentMuteStatus));
      }

      if (isGameStarted) {
        // console.log("Playing Music");

        switch (currentStage) {
          case 1:
            audioSrc = parentPath + "Morning.mp3";
            break;
          case 2:
            audioSrc = parentPath + "Afternoon.mp3";
            break;
          case 3:
            audioSrc = parentPath + "Sunset.mp3";
            break;
          default:
            audioSrc = parentPath + "Morning.mp3";
            break;
        }

        bgmRef.current.muted = isMuted;
        bgmRef.current.src = audioSrc;
        bgmRef.current.loop = true;

        // Coba memutar audio saat komponen dimuat
        bgmRef.current.load();
        bgmRef.current.play().catch((error) => {
          console.log("Pemutaran audio gagal:", error);
        });
        // setting audio complete---------------------------------------------
      } else {
        // setting audio------------------------------------------------------
        bgmRef.current.muted = isMuted;
        bgmRef.current.loop = false;
        bgmRef.current.src = audioSrc;

        // Coba memutar audio saat komponen dimuat
        bgmRef.current.load();
        bgmRef.current.play().catch((error) => {
          console.log("Pemutaran audio gagal:", error);
        });
        // setting audio complete---------------------------------------------
      }
    }, [isGameStarted]);

    // use effect untuk audio nama hewan
    useEffect(() => {
      if (animalName != "") {
        // Mengatur volume menjadi 10%
        bgmRef.current.volume = 0.1;

        // console.log("playing animal sound");
        // console.log(animalSoundSrc);

        animalRef.current.muted = isMuted;
        animalRef.current.src = animalSoundSrc;
        animalRef.current.loop = false;

        // Coba memutar audio saat komponen dimuat
        animalRef.current.load();
        animalRef.current.play().catch((error) => {
          console.log("Pemutaran audio gagal:", error);
        });

        // Kembalikan volume sound ke 1.0 (100%) setelah animalSound selesai dimainkan
        animalRef.current.onended = () => {
          bgmRef.current.volume = 1.0;
        };
      }
    }, [animalName]);

    // use effect untuk mengubah menjadi audio menang/kalah
    useEffect(() => {
      // console.log("WinLose: ");
      if (winLose == "Win") {
        if (animalRef.current.src != "") {
          animalRef.current.onended = () => {
            audioSrc = parentPath + "Game_Win.mp3";
            bgmRef.current.muted = isMuted;
            bgmRef.current.src = audioSrc;
            bgmRef.current.loop = false;

            bgmRef.current.load();
            bgmRef.current.play().catch((error) => {
              console.log("Pemutaran audio gagal:", error);
            });
          };
        } else {
          audioSrc = parentPath + "Game_Win.mp3";
          bgmRef.current.muted = isMuted;
          bgmRef.current.src = audioSrc;
          bgmRef.current.loop = false;

          bgmRef.current.load();
          bgmRef.current.play().catch((error) => {
            console.log("Pemutaran audio gagal:", error);
          });
        }
        animalRef.current.onended = () => {
          audioSrc = parentPath + "Game_Win.mp3";
          bgmRef.current.muted = isMuted;
          bgmRef.current.src = audioSrc;
          bgmRef.current.loop = false;

          bgmRef.current.load();
          bgmRef.current.play().catch((error) => {
            console.log("Pemutaran audio gagal:", error);
          });
        };
      } else if (winLose == "Lose") {
        // console.log(winLose);

        audioSrc = parentPath + "Game_Lose.mp3";
        bgmRef.current.muted = isMuted;
        bgmRef.current.src = audioSrc;
        bgmRef.current.loop = false;

        bgmRef.current.load();
        bgmRef.current.play().catch((error) => {
          console.log("Pemutaran audio gagal:", error);
        });
      }
    }, [winLose]);

    // Simpan status mute ke sessionStorage dan perbarui audio
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
        <audio id="animalSound" ref={animalRef} />

        {/* Tombol mute/unmute */}
        <button id="muteButton" onClick={toggleMute}>
          {isMuted ? "🔈" : "🔊"}
        </button>
      </>
    );
  },
  (prevProps, nextProps) => {
    // Hanya render ulang jika properti berubah
    return (
      prevProps.isGameStarted === nextProps.isGameStarted &&
      prevProps.animalName === nextProps.animalName &&
      prevProps.winLose === nextProps.winLose
    );
  }
);

function toBoolean(str) {
  return str === "true"; // Mengembalikan `true` jika string adalah "true"
}

export default Audio;
