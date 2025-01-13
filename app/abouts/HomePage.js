"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scene from "./Scene";
import MainMenu from "./MainMenu";
import Chapter1 from "./Chapter_1";
import Chapter2 from "./Chapter_2";
import Chapter3 from "./Chapter_3";
import Encyclopedia from "./Encyclopedia";
import Recollection from "./Recollection";
import EncyclopediaDetail from "./EncyclopediaDetail";

export default function HomePage() {
  return (
    <BrowserRouter>
      {/* List Routes yang memungkinkan */}
      <Routes>
        {/* Main Menu Route */}
        <Route path="/" element={<MainMenu />} />

        {/* Other Routes */}
        <Route
          path="/scene_prologue"
          element={<Scene sceneName="prologue" isRecollection={false} />}
        />
        <Route
          path="/scene_story_ch1"
          element={<Scene sceneName="story_ch1" isRecollection={false} />}
        />
        <Route
          path="/scene_story_ch2"
          element={<Scene sceneName="story_ch2" isRecollection={false} />}
        />
        <Route
          path="/scene_bad_ending_1"
          element={<Scene sceneName="bad_ending_1" isRecollection={false} />}
        />
        <Route
          path="/scene_bad_ending_2"
          element={<Scene sceneName="bad_ending_2" isRecollection={false} />}
        />
        <Route
          path="/scene_bad_ending_3"
          element={<Scene sceneName="bad_ending_3" isRecollection={false} />}
        />
        <Route
          path="/scene_good_ending"
          element={<Scene sceneName="good_ending" isRecollection={false} />}
        />
        <Route
          path="/scene_true_ending"
          element={<Scene sceneName="true_ending" isRecollection={false} />}
        />
        <Route
          path="/scene_hidden_ending"
          element={<Scene sceneName="hidden_ending" isRecollection={false} />}
        />

        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/detail-hewan" element={<EncyclopediaDetail />} />
        <Route path="/recollection" element={<Recollection />} />

        {/* route scene dari recollection */}
        <Route
          path="/scene_prologue_recollection"
          element={<Scene sceneName="prologue" isRecollection={true} />}
        />
        <Route
          path="/scene_story_ch1_recollection"
          element={<Scene sceneName="story_ch1" isRecollection={true} />}
        />
        <Route
          path="/scene_story_ch2_recollection"
          element={<Scene sceneName="story_ch2" isRecollection={true} />}
        />
        <Route
          path="/scene_bad_ending_1_recollection"
          element={<Scene sceneName="bad_ending_1" isRecollection={true} />}
        />
        <Route
          path="/scene_bad_ending_2_recollection"
          element={<Scene sceneName="bad_ending_2" isRecollection={true} />}
        />
        <Route
          path="/scene_bad_ending_3_recollection"
          element={<Scene sceneName="bad_ending_3" isRecollection={true} />}
        />
        <Route
          path="/scene_good_ending_recollection"
          element={<Scene sceneName="good_ending" isRecollection={true} />}
        />
        <Route
          path="/scene_true_ending_recollection"
          element={<Scene sceneName="true_ending" isRecollection={true} />}
        />
        <Route
          path="/scene_hidden_ending_recollection"
          element={<Scene sceneName="hidden_ending" isRecollection={true} />}
        />

        {/* Catch-all route to redirect to MainMenu */}
        <Route path="*" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
