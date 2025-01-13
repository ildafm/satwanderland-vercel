import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "../custom_style/KaliCoba.css";

const KaliCoba = ({ kaliCoba, onResetGame, loseGame, currentStage }) => {
  useEffect(() => {
    if (kaliCoba === 0) {
      loseGame();
      LoseSweetAlert(onResetGame, currentStage); // Panggil SweetAlert hanya sekali
    }
  }, [kaliCoba]); // Efek hanya dipicu ketika `kaliCoba` berubah

  return (
    <>
      <button className="kali-coba">Chance: {kaliCoba}</button>
    </>
  );
};

function LoseSweetAlert(onResetGame, currentStage) {
  // Menampilkan SweetAlert kalau kondisi kalah

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

  Swal.fire({
    title: "You ran out of chances to flip the card! Do you want to try again?",
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

export default KaliCoba;
