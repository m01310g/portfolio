import Image from "next/image";
import { ImageModalContainer, ModalOverlay } from "./ProjectModal.styled";
import { useEffect } from "react";
import CloseButton from "../closeButton/CloseButton";

interface FullScreenImageModal {
  src: string;
  alt: string;
  onClose: () => void;
}

const FullScreenImageModal = ({ src, alt, onClose }: FullScreenImageModal) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <ModalOverlay onClick={onClose}>
      <CloseButton onClose={onClose} />
      <ImageModalContainer onClick={(e) => e.stopPropagation()}>
        <Image
          className="screenshot"
          src={src}
          alt={alt}
          width={1000}
          height={1000}
        />
      </ImageModalContainer>
    </ModalOverlay>
  );
};

export default FullScreenImageModal;
