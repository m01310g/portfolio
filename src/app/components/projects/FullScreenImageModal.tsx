import Image from "next/image";
import { useEffect } from "react";
import CloseButton from "../closeButton/CloseButton";
import ArrowButton from "./ArrowButton";
import { ModalOverlay } from "./modal/ProjectModal.styled";
import {
  ImageModalContainer,
  ImageWrapper,
} from "./FullScreenImageModal.styled";

interface FullScreenImageModal {
  images: { src: string; caption: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  onClose: () => void;
}

const FullScreenImageModal = ({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}: FullScreenImageModal) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((currentIndex + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((currentIndex - 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, currentIndex, images.length, setCurrentIndex]);

  return (
    <ModalOverlay onClick={onClose}>
      <CloseButton onClose={onClose} />
      <ImageModalContainer onClick={(e) => e.stopPropagation()}>
        <p className="caption">{images[currentIndex].caption}</p>
        <ImageWrapper>
          {currentIndex > 0 && (
            <ArrowButton
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              images={images}
              direction="left"
            />
          )}
          <Image
            className="screenshot"
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            width={1000}
            height={1000}
          />
          {currentIndex < images.length - 1 && (
            <ArrowButton
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              images={images}
              direction="right"
            />
          )}
        </ImageWrapper>
      </ImageModalContainer>
    </ModalOverlay>
  );
};

export default FullScreenImageModal;
