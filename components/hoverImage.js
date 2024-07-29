import Image from "next/image"

export default function Hoverimage({imageLink, style}){
    return(
       <div className="Hoverimageui z-50 cursor-pointer bg-transparent ">
            <Image src={imageLink}  width={400} height={400} className={style} alt="my work" />
        </div>
    )
}