import { useState, useRef, useEffect } from "react";

const UMFScaleTasteProfile = () => {
  const umfVariants = [
    { label: "10+", color: "#FFD700" }, // yellow
    { label: "15+", color: "#FF0000" }, // red
    { label: "20+", color: "#C2185B" }, // dark pink
    { label: "24+", color: "#8E24AA" }, // purple
    { label: "26+", color: "#2196F3" }, // blue
    { label: "28+", color: "#4CAF50" }, // green
  ];

  const [selectedIndex, setSelectedIndex] = useState(3); // default 24+
  const tasteLineRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [buttonLeft, setButtonLeft] = useState(0);

  // Initialize button position on mount
  useEffect(() => {
    if (tasteLineRef.current) {
      const lineWidth = tasteLineRef.current.offsetWidth;
      const pos = (selectedIndex / (umfVariants.length - 1)) * lineWidth;
      setButtonLeft(pos);
    }
  }, [tasteLineRef.current]);

  const handleDrag = (clientX) => {
    if (!tasteLineRef.current) return;

    const lineRect = tasteLineRef.current.getBoundingClientRect();
    let newLeft = clientX - lineRect.left;
    newLeft = Math.max(0, Math.min(newLeft, lineRect.width));
    setButtonLeft(newLeft);

    const segmentWidth = lineRect.width / (umfVariants.length - 1);
    const newIndex = Math.round(newLeft / segmentWidth);
    setSelectedIndex(newIndex);
  };

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e) => dragging && handleDrag(e.clientX);
  const handleTouchMove = (e) => handleDrag(e.touches[0].clientX);
  const handleTouchStart = () => setDragging(true);
  const handleTouchEnd = () => setDragging(false);

  return (
    <div className="w-full p-4 sm:p-6 flex flex-col gap-4 select-none">
      {/* UMF Scale */}
      <div className="flex flex-wrap justify-between sm:justify-around gap-4">
        {umfVariants.map((v, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-1 min-w-[40px]"
          >
            <span
              className={`font-semibold text-center text-sm sm:text-base`}
              style={{ color: idx === selectedIndex ? v.color : "#4a4a4a" }}
            >
              UMF<sup className="align-super text-[6px] sm:text-xs">TM</sup>{" "}
              {v.label}
            </span>
            <div
              className="h-1 w-10 sm:w-20 rounded-full"
              style={{
                backgroundColor: idx === selectedIndex ? v.color : "#d1d1d1",
              }}
            />
          </div>
        ))}
      </div>

      {/* Taste Profile Line */}
      <div
        ref={tasteLineRef}
        className="relative h-4 rounded-full mt-4"
        style={{
          background: `linear-gradient(to right, ${umfVariants
            .map((v) => v.color)
            .join(",")})`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={handleTouchMove}
      >
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setDragging(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full cursor-pointer touch-none"
          style={{ left: buttonLeft }}
        />
      </div>

      {/* Taste Labels */}
      <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-700 mt-2">
        <span>Clean & Intense</span>
        <span>Bold & Intense</span>
      </div>
    </div>
  );
};

export default UMFScaleTasteProfile;
