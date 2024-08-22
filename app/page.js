"use client";
// import Image from "next/image";
const  TimiReact =  "/img/timi_React.svg";
const  Nodejs =  "/img/timi_Nodejs.svg";
const  Tf =  "/img/timi_Tensorflow.svg";
const  Figma =  "/img/timi_Figma.svg";
const  Nerra =  "/img/Nerra.svg";
const  Triida =  "/img/Triida.svg";
const  Seeker =  "/img/Seeker.svg";
import Preview from "@/components/preview";
import { useState } from "react";
import Hoverimage from "@/components/hoverImage";

const triidaCaseStudy = "/img/ui_casestudy/Nerra ui research.svg";

export default function Home() {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <main className="flex flex-col gap-5 items-center justify-end w-full h-full absolute top-0 pb-10 max-[440px]:pb-5 overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl font-bold">
          Ifoghale Timilehin
        </h1>
        <div className="flex flex-col w-max items-center">
          <h2 className="max-2xl:text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl  font-normal">
            Fullstack, ui/ux, Mobile dev, Ml
          </h2>
          <div className="flex flex-1 justify-between w-full">
            <img
              src={Nodejs}
              alt="node js logo"
              className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6"
            />
            <img
              src={Figma}
              alt="figma logo"
              className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6"
            />
            <img
              src={TimiReact}
              alt="react js & native"
              className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6"
            />
            <img
              src={Tf}
              alt="tensor flow logo"
              className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 max-[440px]:gap-1 max-w-6xl">
        <div
          onClick={() =>
            setPreviewImage("/img/ui_casestudy/Triida ui research.svg")
          }
          className="showUiprev relative flex items-end gap-1 bg-triida-light py-5 px-10 rounded-3xl cursor-pointer  max-[639px]:items-center max-[440px]:flex-col max-[440px]:py-2.5  w-max"
        >
          <img
            src={Triida}
            alt="triida"
            className="w-auto lg:h-14 md:h-12 sm:h-10  max-[639px]:h-8 max-[440px]:h-5"
          />
          <p className="text-triida pb-1 lg:text-2l h-max max-[639px]:p-0 max-[639px]:text-sm max-[440px]:text-xs">
            Ondemand Parcel Delivery
          </p>
          <Hoverimage imageLink="/img/triida-ui.svg" />
        </div>
        <div
          onClick={() =>
            setPreviewImage("/img/ui_casestudy/Nerra ui research.svg")
          }
          className="showUiprev relative flex items-end gap-1 bg-nerra-light py-5 px-10 rounded-3xl cursor-pointer max-[639px]:items-center max-[440px]:flex-col max-[440px]:py-2.5  w-max"
        >
          <img
            src={Nerra}
            alt="nerra"
            className="w-auto lg:h-14 md:h-12 sm:h-10  max-[639px]:h-8 max-[440px]:h-5"
          />
          <p className="text-nerra pb-1 lg:text-2l h-max max-[639px]:p-0 max-[639px]:text-sm max-[440px]:text-xs">
            Highschool industrial training
          </p>
          <Hoverimage
            imageLink="/img/nerra-ui.svg"
            style=" bg-gray-100 backdrop-filter backdrop-blur-2xl rounded-xl shadow-nerra-light"
          />
        </div>
        <div className="relative flex items-end gap-1 bg-seeker-light py-5 px-10 rounded-3xl cursor-pointer max-[639px]:items-center max-[440px]:flex-col max-[440px]:py-2.5  w-max">
          <img
            src={Seeker}
            alt="seeker"
            className="w-auto lg:h-14 md:h-12 sm:h-10  max-[639px]:h-8 max-[440px]:h-5"
          />
          <p className="text-seeker pb-1 lg:text-2l h-max max-[639px]:p-0 max-[639px]:text-sm max-[440px]:text-xs">
            Snap, find and buy nearby
          </p>
        </div>
      </div>
      {/* {workPreview && <Hoverimage imageLink="/img/nerra-ui.svg"/>} */}
      {previewImage && (
        <Preview imageLink={previewImage} setPreviewImage={setPreviewImage} />
      )}
    </main>
  );
}
