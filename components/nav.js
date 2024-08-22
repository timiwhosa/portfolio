"use client";
// import Image from "next/image";
import Link from "next/link";
// img, svg
const Logo = "./img/Timi.png";
const vidCall = "./img/Video_call_timi.svg";
const whatsapp = "/img/whatsapp.svg";
import VidCall from "./videocall";
import { useState } from "react";

export default function Navbar() {
  const [VidcallStatus, setVidCallStatus] = useState("call");
  return (
    <>
      <div className="flex justify-between min-[540px]:p-10 max-[539px]:p-5 max-[440px]:pr-0 h-16 overflow-visible sticky w-full top-0 z-40">
        <div>
          <Link href="/" className="Logo relative w-min">
            <img
              src={Logo}
              height={26}
              className="w-auto relative max-h-10"
              alt="timi wordmark"
            />
          </Link>
        </div>
        <div className="flex min-[540px]:gap-10 gap-5 text-base">
          <div className="flex min-[540px]:gap-10 gap-2 justify-end max-[539px]:flex-col max-[539px]:items-end h-max">
            <Link href="/fun"> Fun</Link>
            <Link href="/pins"> Pins</Link>
            <Link href="/resume"> Resume</Link>
          </div>
          <div className="flex flex-col gap-5 items-center bg-gray-100 min-[540px]:p-5 max-[539px]:p-3 h-max">
            <span className="w-24"> Lets talk about your Project</span>
            <img
              src={vidCall}
              // onClick={() => setVidCallStatus("call")}
              alt="timi wordmark"
              title="Video Call me now"
              className="cursor-not-allowed h-10 w-auto max-[440px]:h-5 opacity-20"
            />
            <Link href="https://wa.me/+2349050595291" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  src={whatsapp}
                  alt="timi wordmark"
                  title="Lets talk on whatsapp"
                  className="cursor-pointer h-10 w-auto max-[440px]:h-5"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* {VidcallStatus==="call" && <VidCall setVidCallStatus={setVidCallStatus} roomId={1}  />} */}
    </>
  );
}
