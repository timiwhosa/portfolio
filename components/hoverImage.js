// import Image from "next/image";
import { useState } from "react";

export default function Hoverimage({ imageLink, style }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    // You could set an error state here if you want to handle loading errors
  };
  return (
    <div className="Hoverimageui z-50 cursor-pointer bg-transparent absolute">
      {isLoading && (
        <div className="loading-spinner flex h-full items-center">
          <svg
            className="animate-spin h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
            />
          </svg>
        </div>
      )}
      <img
        src={imageLink}
        // priority={true}
        width={400}
        height={400}
        className={style}
        alt="my work"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
}
