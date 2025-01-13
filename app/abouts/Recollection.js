"use client";

import AudioPageMenuAndScene from "../components/AudioPageMenuAndScene";
import "../custom_style/Recollection.css";

export default function Recollection() {
  const items = [
    {
      id: 1,
      sceneName: "Prologue",
      sceneNameAtSessionStorage: "prologue",
      route: "/scene_prologue_recollection",
    },
    {
      id: 2,
      sceneName: "Story Chapter 1",
      sceneNameAtSessionStorage: "story_ch1",
      route: "/scene_story_ch1_recollection",
    },
    {
      id: 3,
      sceneName: "Story Chapter 2",
      sceneNameAtSessionStorage: "story_ch2",
      route: "/scene_story_ch2_recollection",
    },
    {
      id: 4,
      sceneName: "Bad Ending 1",
      sceneNameAtSessionStorage: "bad_ending_1",
      route: "/scene_bad_ending_1_recollection",
    },
    {
      id: 5,
      sceneName: "Bad Ending 2",
      sceneNameAtSessionStorage: "bad_ending_2",
      route: "/scene_bad_ending_2_recollection",
    },
    {
      id: 6,
      sceneName: "Bad Ending 3",
      sceneNameAtSessionStorage: "bad_ending_3",
      route: "/scene_bad_ending_3_recollection",
    },
    {
      id: 7,
      sceneName: "Good Ending",
      sceneNameAtSessionStorage: "good_ending",
      route: "/scene_good_ending_recollection",
    },
    {
      id: 8,
      sceneName: "True Ending",
      sceneNameAtSessionStorage: "true_ending",
      route: "/scene_true_ending_recollection",
    },
    {
      id: 9,
      sceneName: "Hidden Ending",
      sceneNameAtSessionStorage: "hidden_ending",
      route: "/scene_hidden_ending_recollection",
    },
  ];
  // bagian yang atas ini untuk insert content
  // bagian abis return itu untuk layout gridnya
  return (
    <>
      <AudioPageMenuAndScene currentScene={"Recollection"} />

      <div
        name=""
        className="bg-gradient-to-b bg-gray-500 w-full text-black md:h-screen text-center md:text-left"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
          <div className="max-w-screen-lg p-4 mx-auto flex items-center justify-between w-full">
            {/* button kembali */}
            <a href="/" className="p-2 rounded">
              👈
              <span className="border-b-4 border-white text-white">Back</span>
            </a>

            <p className="text-4xl font-bold inline border-b-4 border-white text-white text-right">
              Recollection
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:px-5">
            {items.map(
              ({ id, sceneName, sceneNameAtSessionStorage, route }) => (
                <div key={id} className="place-self-center h-36">
                  <button
                    className={`${
                      sessionStorage.getItem(sceneNameAtSessionStorage) === null
                        ? "btn-disabled"
                        : ""
                    }`}
                    onClick={() => (window.location.href = route)}
                  >
                    <div className="relative w-48 hover:scale-105">
                      <img
                        src="/images/hori_card_h200.png"
                        className="w-full"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-bold">
                        {sceneName}
                      </span>
                    </div>
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
