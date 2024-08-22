// import Image from "next/image";
import { useState } from "react";

export default function Preview({ imageLink, setPreviewImage }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    // You could set an error state here if you want to handle loading errors
  };

  return (
    <div
      className="preview fixed z-50 top-0 left-0 cursor-pointer bg-black bg-opacity-25 h-dvh w-full overflow-y-scroll flex justify-center"
      onClick={() => setPreviewImage(null)}
    >
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
        onLoad={handleImageLoad}
        onError={handleImageError}
        width={40}
        height={40}
        className="w-auto h-max max-w"
        alt="my work"
      />
    </div>
  );
}
