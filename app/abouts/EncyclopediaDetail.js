"use client";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AudioPageMenuAndScene from "../components/AudioPageMenuAndScene";

export default function EncyclopediaDetail() {
  const location = useLocation();
  const item = location.state || {}; // Mengambil objek item yang dikirimkan

  return (
    <>
      <AudioPageMenuAndScene currentScene={"Encyclopedia"} />

      {/* background gelap */}
      <div
        name=""
        className="bg-gradient-to-b bg-gray-500 w-full min-h-screen md:text-left text-white"
      >
        <div className="flex justify-center">
          <div className="container px-4 py-16">
            {/* button kembali */}
            <a href="/encyclopedia" className="p-2 rounded">
              👈
              <span className="border-b-4 border-white">Back</span>
            </a>

            <div className="w-auto max-w-screen-lg mx-auto object-contain place-self-center">
              {/* Icon dan Nama hewan */}
              <div className="p-4 mx-auto flex flex-col w-full h-full items-center">
                <div className="relative">
                  {/* icon hewan */}
                  <img
                    src={item.svg}
                    alt={item.namaHewanInggris}
                    className="inline object-contain h-12 w-12 "
                  />
                  {/* nama hewan */}
                  <p className="inline p-4 text-3xl font-bold">
                    {item.namaHewanInggris}
                  </p>
                </div>
              </div>

              {/* Deskripsi dan Gambar Hewan */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                {/* Deskripsi */}
                <div className="text-justify text-3xl md:text-xl lg:text-2xl">
                  <div className="">
                    <p>
                      {item.deskripsi}{" "}
                      {/* <a
                  href={item.srcDeskripsi}
                  target="_blank"
                  className="border-b-4 border-gray-500"
                >
                  Sumber
                </a> */}
                    </p>
                    <br />
                    <p>Kingdom {item.kingdom}</p>
                    <p>Phylum: {item.phylum}</p>
                    <p>Class: {item.class}</p>
                    <p>Order: {item.order}</p>
                    <p>Family: {item.family}</p>
                    <p>Genus: {item.genus}</p>
                    <p>Species: {item.species}</p>
                  </div>
                </div>

                {/* Gambar */}
                <div className="flex flex-col gap-2">
                  <img
                    src={item.linkGambar}
                    alt={item.namaHewan}
                    className="rounded-lg object-scale-down h-48 w-96"
                  />
                  {/* <a
                href={item.srcGambar}
                target="_blank"
                className="border-b-4 border-gray-500"
              >
                Sumber Gambar
              </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* end background */}
        </div>
      </div>
    </>
  );
}
