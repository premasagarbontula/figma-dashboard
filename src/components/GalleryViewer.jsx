import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../assets/manuka-honey-umf24-250g-carousel-1.png";
import img2 from "../assets/manuka-honey-umf24-250g-carousel-2.png";
import img3 from "../assets/manuka-honey-umf24-250g-carousel-3.png";

const images = [img1, img2, img3];

const GalleryViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[585px] bg-[#fbf9f6] flex flex-col items-center justify-start  p-2">
      {/* Main Carousel Image */}
      <div className="w-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto object-cover rounded-lg bg-cover"
          style={{
            backgroundImage: "url('src/assets/Backdrop.png')",
          }}
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Row of two images */}
      <div className="flex w-full pb-2 mt-3 gap-2">
        <img
          src="src/assets/1-manuka-honey-web-24_-5.png"
          alt="Thumb 1"
          className="w-1/2 object-cover rounded-lg"
        />
        <img
          src="src/assets/1-manuka-honey-web-24.png"
          alt="Thumb 2"
          className="w-1/2 object-cover rounded-lg"
        />
      </div>

      {/* YouTube Video Embed */}
      <div className="w-full aspect-video mt-2">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/vnaXEMhXddE?autoplay=0&controls=0&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          className="rounded-lg"
        />
      </div>

      {/* Another two images row */}
      <div className="flex w-full pt-2 gap-2">
        <img
          src="src/assets/1-manuka-honey-web-24_-2.png"
          alt="Thumb 3"
          className="w-1/2 object-cover rounded-lg"
        />
        <img
          src="src/assets/1-manuka-honey-web-24_-3.png"
          alt="Thumb 4"
          className="w-1/2 object-cover rounded-lg"
        />
      </div>

      {/* Another two images row */}
      <div className="flex w-full pt-2 gap-2">
        <img
          src="src/assets/1-manuka-honey-web-24_-4.png"
          alt="Thumb 5"
          className="w-1/2 object-cover rounded-lg"
        />
        <img
          src="src/assets/manuka-honig-umf-24-fruits.png"
          alt="Thumb 6"
          className="w-1/2 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default GalleryViewer;
