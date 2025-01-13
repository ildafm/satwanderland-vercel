"use client";
import { useEffect } from "react";
import Board2 from "../components/Board2";
import "../custom_style/Chapters.css";

export default function Chapter() {
  const currentStage = 1;

  useEffect(() => {
    if (sessionStorage.getItem("unlockedChapter1") === null) {
      sessionStorage.setItem("unlockedChapter1", true);
    }
  }, []);

  return (
    <div id="bodychapter1" className="min-h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          {/* papan Game */}
          <Board2
            currentStage={currentStage}
            onResetGame={() => setOpenBoard((prev) => !prev)} // Trigger reset
          />
        </div>
      </div>
    </div>
  );
}
