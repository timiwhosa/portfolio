"use client"
import Image from "next/image"
import TimiReact from "../public/img/timi_React.svg"
import Nodejs from "../public/img/timi_Nodejs.svg"
import Tf from "../public/img/timi_Tensorflow.svg"
import Figma from "../public/img/timi_Figma.svg"
import Nerra from "../public/img/Nerra.svg"
import Triida from "../public/img/Triida.svg"
import Seeker from "../public/img/Seeker.svg"
import Preview from "@/components/preview"
import { useState } from "react"
import Hoverimage from "@/components/hoverImage"

export default function Home() {
  const [previewImage, setPreviewImage] = useState(null)
  const [workPreview, setWorkPreviewImage] = useState(null)
  return (
    <main className="flex flex-col gap-5 items-center justify-end w-full h-full absolute top-0 pb-10 overflow-hidden">
      <div className="flex flex-col items-center">
          <h1 className="max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl font-bold">
              Ifoghale Timilehin
          </h1>
          <div className="flex flex-col w-max items-center">
            <h2 className="max-2xl:text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl  font-normal">
                Fullstack, ui/ux, Mobile dev, Ml
            </h2>
            <div className="flex flex-1 justify-between w-full">
                <Image src={Nodejs} alt="node js logo" className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6" />
                <Image src={Figma} alt="figma logo" className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6"/>
                <Image src={TimiReact}alt="react js & native" className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6" />
                <Image src={Tf} alt="tensor flow logo" className="w-auto lg:h-10 md:h-8 sm:h-6 max-[639px]:h-6"/>
            </div>
          </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div onClick={()=> setPreviewImage("/img/ui_casestudy/Triida ui research.svg")}
         className="showUiprev relative flex items-end gap-1 bg-triida-light py-5 px-10 rounded-3xl cursor-pointer  max-[639px]:items-center max-[440px]:flex-col max-[440px]:py-2.5  w-max">
          <Image src={Triida} alt="triida"  className="w-auto lg:h-14 md:h-12 sm:h-10  max-[639px]:h-8" />
          <p className="text-triida pb-1 lg:text-2l md:h-8 sm:h-6 max-[639px]:h-3.5"> 
            Ondemand Parcel Delivery
          </p>
          <Hoverimage imageLink="/img/triida-ui.svg"/>
        </div>
        <div onClick={()=> setPreviewImage("/img/ui_casestudy/Nerra ui research.svg")}
         className="showUiprev relative flex items-end gap-1 bg-nerra-light py-5 px-10 rounded-3xl cursor-pointer max-[639px]:items-center w-max max-[440px]:flex-col">
          <Image src={Nerra} alt="nerra"  className="w-auto lg:h-14 md:h-12 sm:h-10  max-[639px]:h-8" />
          <p className="text-nerra pb-1 lg:text-2l md:h-8 sm:h-6 max-[639px]:h-3.5"> 
            Highschool industrial training
          </p>
          <Hoverimage imageLink="/img/nerra-ui.svg" style=" bg-gray-100 backdrop-filter backdrop-blur-2xl rounded-xl shadow-nerra-light"/>
        </div>
        <div className="relative flex items-end gap-1 bg-seeker-light py-5 px-10 rounded-3xl cursor-pointer max-[639px]:items-center w-max max-[440px]:flex-col">
          <Image src={Seeker} alt="seeker"  className="w-auto lg:h-14 md:h-12 sm:h-10  max-[639px]:h-8" />
          <p className="text-seeker pb-1 lg:text-2l md:h-8 sm:h-6 max-[639px]:h-3.5"> 
            Snap, find and buy nearby
          </p>
        </div>
      </div>
      {/* {workPreview && <Hoverimage imageLink="/img/nerra-ui.svg"/>} */}
      {previewImage && <Preview  imageLink={previewImage} setPreviewImage={setPreviewImage}/>}
    </main>
  );
}
