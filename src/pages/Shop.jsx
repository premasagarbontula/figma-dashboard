import GalleryViewer from "../components/GalleryViewer";
import RightSection from "../components/RightSection";

export default function Shop() {
  return (
    <div className="relative bg-[#fbf9f6] flex flex-col md:flex-row px-4 md:px-[70px] pt-4 md:pt-[35.55px] gap-6 md:gap-10">
      <GalleryViewer />
      <RightSection />
    </div>
  );
}
