import React, { useEffect, useRef, useState, memo } from "react";
import Swal from "sweetalert2";
import "../custom_style/Timer.css";

const ParentTimer = ({
  isGameStarted,
  onResetGame,
  loseGame,
  winGame,
  winLose,
  currentStage,
  setTimeLeft,
  isHiddenEnding,
}) => {
  const intervalId = useRef(null); // Simpan ID interval
  const timeLimit = 300; // 300 detik = 5 menit
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (winLose == "Lose" || winLose == "Win") {
      clearInterval(intervalId.current); // Bersihkan interval jika ada
    }
  }, [winLose]);

  return (
    <>
      <Timer
        isGameStarted={isGameStarted}
        onResetGame={onResetGame}
        loseGame={loseGame}
        winGame={winGame}
        intervalId={intervalId}
        timeLimit={timeLimit}
        currentStage={currentStage}
        setTimeLeft={setTimeLeft}
        currentHiddenEnding={isHiddenEnding}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
    </>
  );
};

const Timer = memo(
  ({
    isGameStarted,
    onResetGame,
    loseGame,
    winGame,
    intervalId,
    timeLimit,
    currentStage,
    setTimeLeft,
    currentHiddenEnding,
    currentTime,
    setCurrentTime,
  }) => {
    const timeElapsed = useRef(0); // Gunakan useRef untuk menyimpan waktu
    const [second, setSecond] = useState(0); // hanya untu memicu render

    // Reset timer saat game di-reset
    useEffect(() => {
      timeElapsed.current = 0; // Reset waktu ke 0
      setSecond(0);
      if (intervalId.current) {
        clearInterval(intervalId.current); // Bersihkan interval jika ada
      }
    }, [onResetGame]);

    useEffect(() => {
      timeElapsed.current = currentTime;
    }, [currentHiddenEnding]);

    // Mulai timer saat game dimulai
    useEffect(() => {
      if (isGameStarted) {
        intervalId.current = setInterval(() => {
          timeElapsed.current += 1; // Tambah waktu tanpa memicu render
          setCurrentTime(timeElapsed.current);
          setSecond(timeElapsed.current); // digunakan untuk memicu render

          // Kirim sisa waktu ke Board
          setTimeLeft(timeLimit - timeElapsed.current);

          if (timeElapsed.current >= timeLimit) {
            clearInterval(intervalId.current); // Hentikan timer

            if (currentHiddenEnding && currentStage == 3) {
              winGame();
            } else {
              loseGame(); // Panggil loseGame
              loseSweetAlert(onResetGame, currentStage); // Tampilkan SweetAlert
            }
          }
        }, 1000);
      }

      return () => clearInterval(intervalId.current); // Bersihkan interval
    }, [isGameStarted, currentHiddenEnding]);

    // Persentase untuk progress bar
    const progressPercentage = Math.min(
      (timeElapsed.current / timeLimit) * 100,
      100
    );

    return (
      <>
        <div>
          {/* Timer dengan progress bar */}
          <div className="wrapper">
            <div className="icon-sun"></div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                id="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="icon-moon"></div>
          </div>
        </div>
      </>
    );
  },
  (prevProps, nextProps) => {
    // Hanya render ulang jika properti berubah
    return (
      prevProps.isGameStarted === nextProps.isGameStarted &&
      prevProps.currentHiddenEnding === nextProps.currentHiddenEnding
    );
  }
);

function loseSweetAlert(onResetGame, currentStage) {
  let nextPage = "";
  switch (currentStage) {
    case 1:
      nextPage = "/scene_bad_ending_1";
      break;
    case 2:
      nextPage = "/scene_bad_ending_2";
      break;
    case 3:
      nextPage = "/scene_bad_ending_3";
      break;
    default:
      nextPage = "/";
      break;
  }

  // Menampilkan SweetAlert kalau waktu habis
  Swal.fire({
    title: "Time's up! Do you want to try again?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonColor: "#000",
    denyButtonColor: "#000",
    confirmButtonText: "Yes",
    denyButtonText: `No`,
    background: "#fff", // background warna putih
    allowOutsideClick: false, // Mencegah penutupan dengan klik di luar
    allowEscapeKey: false, // Mencegah penutupan dengan tombol Escape
    allowEnterKey: false, // Mencegah penutupan dengan tombol Enter
    customClass: {
      confirmButton: "swalButton", // Tambahkan kelas kustom untuk tombol konfirmasi
      denyButton: "swalButton", // Tambahkan kelas kustom untuk tombol batal
    },
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      onResetGame();
    } else if (result.isDenied) {
      window.location.href = nextPage;
    }
  });
}

export default ParentTimer;
