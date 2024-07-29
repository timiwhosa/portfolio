import Image from "next/image"

export default function Preview({imageLink,setPreviewImage}){
    return(
       <div className="preview fixed z-50 top-0 left-0 cursor-pointer bg-black bg-opacity-25 h-dvh w-full overflow-y-scroll flex justify-center" onClick={()=> setPreviewImage(null)}>
            <Image src={imageLink} width={40} height={40} className="w-auto h-max max-w" alt="my work" />
        </div>
    )
}