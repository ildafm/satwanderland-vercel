"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Timer from "./Timer2";
import KaliCoba from "./KaliCoba";
import Audio from "./Audio2";
import "../custom_style/Board.css";
import Swal from "sweetalert2";

const listImage = [
  "/svgs/Bear.svg",
  "/svgs/Cat.svg",
  "/svgs/Chicken.svg",
  "/svgs/Cow.svg",
  "/svgs/Crocodile.svg",
  "/svgs/Dog.svg",
  "/svgs/Fox.svg",
  "/svgs/Frog.svg",
  "/svgs/Giraffe.svg",
  "/svgs/Koala.svg",
  "/svgs/Lion.svg",
  "/svgs/Monkey.svg",
  "/svgs/Owl.svg",
  "/svgs/Panda.svg",
  "/svgs/Penguin.svg",
  "/svgs/Pig.svg",
  "/svgs/Puma.svg",
  "/svgs/Rabbit.svg",
  "/svgs/Sheep.svg",
  "/svgs/Squirrel.svg",
  "/svgs/Tiger.svg",
  "/svgs/Wolf.svg",
];

let isShuffled = false;
let animalName = "";
let colsSize = "";
let cardDeck = null;

function colsSizeManage(currentStage) {
  if (currentStage === 1) {
    colsSize = "grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10";
  } else if (currentStage === 2) {
    colsSize = "grid grid-cols-4 lg:grid-cols-10";
  } else if (currentStage === 3) {
    colsSize = "grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15";
  }
}

const Board = ({ currentStage }) => {
  //initial -------------------------------------------------------------
  colsSizeManage(currentStage); // mengatur cols dan ukuran kartu sesuai dengan stage saat ini

  const maksKaliCoba = 15;
  const numCardVariety = currentStage * 5; // tentukan total variasi yang akan digunakan, stage ini * 5
  const localCardDeck = createCardsDeck(numCardVariety, currentStage);

  const [cards, setCards] = useState(localCardDeck);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [onResetGame, setOnResetGame] = useState(Date.now());
  const [tempResetGame, setTempResetGame] = useState(onResetGame); // Gunakan state untuk menyimpan nilai
  const [kaliCoba, setKaliCoba] = useState(maksKaliCoba); // Default adalah 15
  const [winLose, setWinLose] = useState("Playing");
  const [isHiddenEnding, setIsHiddenEnding] = useState(true);

  // untuk menyimpan sisa timer
  const [timeLeft, setTimeLeft] = useState(0);
  // end initial -------------------------------------------------------------

  /* list Function
    -winCondition --> mengubah state winLose menjadi Win ketika menang
    -loseCondition --> mengubah state winLose menjadi Lose ketika kalah
    -flipAllCardsTemporarily --> membalik semua kartu selama 2 detik saat memulai permainan
    -handleResetGame --> Memanggil resetGame
    -resetGame --> Untuk melakukan pengulangan permainan jika kondisi kalah
    -handleClick --> Menangani interaksi dengan Card, jika player melakukan klik card
  */
  function winCondition() {
    WinSweetAlert(currentStage, timeLeft, isHiddenEnding);
    setWinLose("Win");
  }

  function loseCondition() {
    setWinLose("Lose");
  }

  function flipAllCardsTemporarily() {
    // console.log("BaliK Kartu 2 detik");

    // Balik semua kartu
    setFlippedCards(cards);

    // Tutup kembali setelah 2 detik
    setTimeout(() => {
      setFlippedCards([]);
    }, 2000);
  }

  function handleResetGame() {
    setOnResetGame(Date.now()); // Set timestamp untuk nilai unik
  }

  function resetGame() {
    setFlippedCards([]);
    setMatchedPairs(0);

    setCards(localCardDeck);

    setKaliCoba(maksKaliCoba);
    setWinLose("Playing");
    setIsGameStarted(false);

    // Panggil fungsi untuk membalik semua kartu selama 2 detik
    if (currentStage != 3) {
      flipAllCardsTemporarily();
    }
  }

  function handleClick(clickedCard) {
    // Jika kartu pertama diklik, panggil onFirstClick dan set isFirstClick ke false
    if (!isGameStarted) {
      //   console.log("game dimulai bos");
      setIsGameStarted(true); // Set bahwa game sudah dimulai
      //   setIsFirstClick(true); // Set bahwa first klik sudah dilakukan
    }

    // Jangan lakukan apa-apa jika sedang memeriksa pasangan atau kartu sudah dibalik
    if (
      isChecking ||
      flippedCards.some((card) => card.id === clickedCard.id) ||
      clickedCard.matched
    ) {
      return;
    }

    // Tambahkan kartu yang dibalik ke flippedCards
    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    // Setelah dua kartu dibalik, lakukan pengecekan pasangan
    if (newFlippedCards.length === 2) {
      if (isHiddenEnding) {
        setIsHiddenEnding(false);
      }

      setIsChecking(true);

      // Periksa apakah kedua kartu cocok
      if (newFlippedCards[0].image === newFlippedCards[1].image) {
        setMatchedPairs(matchedPairs + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            newFlippedCards.some((flippedCard) => flippedCard.id === card.id)
              ? { ...card, matched: true }
              : card
          )
        );

        // Mengambil nama file tanpa ekstensi
        const path = newFlippedCards[0].image;
        animalName = path.split("/").pop().split(".")[0];

        // getMatchedCard(animalName);
        // console.log(matchedPairs);
        // console.log(animalName);
        setKaliCoba((prev) => Math.min(prev + 1, 15)); // Tambah 1, maksimum 15
      } else {
        setKaliCoba((prev) => Math.max(prev - 1, 0)); // Tambah 1, maksimum 15
      }

      // console.log(kaliCoba);

      // Win Condition
      if (matchedPairs == numCardVariety - 1) {
        winCondition();
      }

      // Tunggu 1 detik sebelum mereset flippedCards dan isChecking
      setTimeout(() => {
        setFlippedCards([]); // Reset flippedCards setelah 1 detik
        setIsChecking(false); // Set isChecking ke false agar bisa klik kartu lagi
      }, 500);
    }
    console.log(isHiddenEnding);
  }

  // list UseEffect
  // Fungsi untuk membalik semua kartu saat reset
  useEffect(() => {
    if (tempResetGame !== onResetGame) {
      setTempResetGame(onResetGame); // Update state dengan nilai onResetGame
      resetGame(); // Panggil fungsi resetGame ketika onResetGame berubah
    }
  }, [onResetGame, tempResetGame]); // Menambahkan tempResetGame agar selalu terupdate

  // FlipAllCardTemporary saat membuka game
  useEffect(() => {
    if (!isGameStarted && currentStage != 3) {
      flipAllCardsTemporarily();
    }
  }, [isGameStarted]);

  // board return
  return (
    <div className="p-8">
      <div className="justify-center items-center">
        {/* Audio komponen */}
        <div>
          <Audio
            isGameStarted={isGameStarted}
            animalName={animalName}
            winLose={winLose}
            currentStage={currentStage}
          />
        </div>
        {/* board game */}
        <div>
          <div className="info">
            {/* mode name */}
            <div>
              <button
                className={`main-menu-button main-menu-button-color-${currentStage} hover:scale-105`}
                onClick={() => (window.location.href = "/")}
              >
                Main Menu
              </button>
            </div>
            {/* timer */}
            <div>
              <Timer
                isGameStarted={isGameStarted}
                onResetGame={handleResetGame}
                loseGame={loseCondition}
                winGame={winCondition}
                winLose={winLose}
                currentStage={currentStage}
                setTimeLeft={setTimeLeft}
                isHiddenEnding={isHiddenEnding}
              />
            </div>
            {/* kali coba */}
            <div>
              <KaliCoba
                kaliCoba={kaliCoba}
                onResetGame={handleResetGame}
                loseGame={loseCondition}
                currentStage={currentStage}
              />
            </div>
          </div>
          <div className="container m-auto flex justify-center items-center">
            <div className={`${colsSize} gap-1 p-4`}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  onClick={handleClick}
                  card={card}
                  isFlipped={
                    flippedCards.some(
                      (flippedCard) => flippedCard.id === card.id
                    ) || card.matched
                  }
                  currentStage={currentStage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function WinSweetAlert(currentStage, timeLeft, isHiddenEnding) {
  // Menampilkan SweetAlert kalau kondisi Menang
  let nextPage = "";
  let pesan = "Congratulations!!! you have successfully matched all the cards.";
  let confirmButtonText = "Continue";

  switch (currentStage) {
    case 1:
      nextPage = "/scene_story_ch1";
      break;
    case 2:
      nextPage = "/scene_story_ch2";
      break;
    case 3:
      nextPage = "/scene_good_ending";
      pesan = "Congratulations!!! you have successfully completed the game";
      confirmButtonText = "Ending";

      if (isHiddenEnding) {
        pesan = "What is this? Why aren't you even trying?";
        nextPage = "/scene_hidden_ending";
      } else if (timeLeft >= 180) {
        // true ending kalau berhasil menyelesaikan stage kurang dari 2 menit
        nextPage = "/scene_true_ending";
      }
      break;
    default:
      nextPage = "/";
      break;
  }

  Swal.fire({
    title: pesan,
    // showDenyButton: true,
    showCancelButton: false,
    confirmButtonColor: "#000",
    // denyButtonColor: "#000",
    confirmButtonText: confirmButtonText,
    // denyButtonText: `Main Menu`,
    background: "#fff", // background warna putih
    allowOutsideClick: false, // Mencegah penutupan dengan klik di luar
    allowEscapeKey: false, // Mencegah penutupan dengan tombol Escape
    allowEnterKey: false, // Mencegah penutupan dengan tombol Enter
    customClass: {
      confirmButton: "swalButton", // Tambahkan kelas kustom untuk tombol konfirmasi
      // denyButton: "swalButton", // Tambahkan kelas kustom untuk tombol batal
    },
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      window.location.href = nextPage;
    }
    // else if (result.isDenied) {
    //   window.location.href = "/";
    // }
  });
}

function generateCards(numCardVariety) {
  const newListImage = [...listImage]; // variabel baru untuk menampung ListImage
  const shuffledCards = newListImage.sort(() => Math.random() - 0.5); // acak newListImage
  const cardsDeck = shuffledCards.slice(0, numCardVariety); // ambil jumlah variasi kartu dari kartu yang sudah di acak
  const duplicateCardsDeck = cardsDeck.concat(cardsDeck); // duplikasi deck
  const finalDeckCard = duplicateCardsDeck.sort(() => Math.random() - 0.5); // kartu yang sudah di duplikasi akan diacak lagi
  // console.log(finalDeckCard);

  return finalDeckCard;
}

function createCardsDeck(numCardVariety, currentStage) {
  if (isShuffled && cardDeck !== null && currentStage != 3) {
    return cardDeck.map((image, index) => ({
      id: index,
      image,
      matched: false,
    }));
  }

  cardDeck = generateCards(numCardVariety); // menampung deck kartu
  isShuffled = true;

  return cardDeck.map((image, index) => ({
    id: index,
    image,
    matched: false,
  }));
}

export default Board;
