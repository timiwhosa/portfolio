"use client";
import Image from "next/image";
import Link from "next/link";
export default function Pins() {
  return (
    <div className="pb-10">
      <h1 className="maxW70vw max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold p-10">
        <span>Specially Selected Pins i saved on </span>
        <a
          href="https://www.pinterest.com/timiwhosa/pins/"
          target="_blank"
          className="underline italic"
        >
          Pinterest
        </a>
      </h1>
      <div className="grid grid-cols-2 gap-10 pl-10 pr-10 max-[440px]:grid-cols-1">
        <Apin
          img="./img/pins/roadrunner.svg"
          title={"Roadrunner"}
          pinterestLink="https://www.pinterest.com/timiwhosa/roadrunner/"
        />
        <Apin
          img="./img/pins/triida.svg"
          title={"Triida Branding"}
          pinterestLink="https://www.pinterest.com/timiwhosa/triida-branding/"
        />
        <Apin
          img="./img/pins/nerra.svg"
          title={"Nerra"}
          pinterestLink="https://www.pinterest.com/timiwhosa/nerra/"
        />
        <Apin
          img="./img/pins/seeker.svg"
          title={"Seeker Ml"}
          pinterestLink="https://www.pinterest.com/timiwhosa/seeker/"
        />
      </div>
    </div>
  );
}

export function Apin({ img, title, pinterestLink }) {
  return (
    <Link href={pinterestLink} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <div className="grid gap-2">
          <img
            src={img}
            width={200}
            height={200}
            className="w-full h-auto rounded-lg border-2 border-black"
            alt="pinterest pins"
          />
          <div className="flex justify-between">
            <h2 className="font-bold max-2xl:text-xl  max-md:text-lg max-[440px]:text-xs">
              {title}
            </h2>
            <img
              src={"./img/rightUparrow.svg"}
              width={20}
              height={20}
              className="h-auto "
              alt="rightUparrow"
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
