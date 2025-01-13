"use client";

import React from "react";
import dynamic from "next/dynamic";
import "./custom_style/GlobalFont.css";

// Memuat komponen HomePage secara dinamis di client-side
const HomePage = dynamic(() => import("./abouts/HomePage"), { ssr: false });

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
