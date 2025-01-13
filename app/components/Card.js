import React, { useEffect, useState } from "react";

export default function Card({ card, onClick, isFlipped, currentStage }) {
  const [showFront, setShowFront] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    let timer;
    if (isFlipped) {
      // Tunda tampilan gambar depan saat animasi membalik (100ms sesuaikan CSS)
      timer = setTimeout(() => setShowFront(true), 150);
    } else {
      // Tunggu sebelum mengubah kembali ke gambar belakang
      timer = setTimeout(() => setShowFront(false), 150);
    }

    return () => clearTimeout(timer); // Bersihkan timer jika isFlipped berubah
  }, [isFlipped]);

  useEffect(() => {
    if (card.matched) {
      setShowSparkle(true);
      const sparkleTimer = setTimeout(() => setShowSparkle(false), 5000);
      return () => clearTimeout(sparkleTimer);
    }
  }, [card.matched]);

  // Menentukan ukuran kartu berdasarkan stage
  let cardSizeClass = "";
  if (currentStage === 1) {
    cardSizeClass = "w-28 h-40";
  } else if (currentStage === 2) {
    cardSizeClass = "w-16 h-28 md:w-24 md:h-36";
  } else if (currentStage === 3) {
    cardSizeClass = "w-12 h-24 lg:w-24 lg:h-36";
  }

  return (
    <div
      className={`card ${isFlipped ? "card-flipped" : ""} m-2 ${cardSizeClass}`}
      onClick={() => onClick(card)}
    >
      <div
        className={`inner-card w-full h-full flex item-center justify-center inner-card-background ${
          card.matched ? "matched" : ""
        }`}
      >
        {showFront || card.matched ? (
          <>
            {/* icon hewan */}
            <img
              className="object-contain w-20 h-20"
              src={card.image}
              alt="card"
            />
            {showSparkle && <div className="sparkle-effect"></div>}
          </>
        ) : (
          <>
            <img
              className="object-cover w-full h-full"
              src={`/images/backCard_${currentStage}.png`}
            />
          </>
        )}
      </div>
    </div>
  );
}
