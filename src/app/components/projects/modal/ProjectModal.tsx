import { useEffect, useState } from "react";
import {
  ModalContainer,
  ModalContent,
  ModalOverlay,
  Outline,
} from "./ProjectModal.styled";
import Image from "next/image";
import FullScreenImageModal from "../FullScreenImageModal";
import CloseButton from "../../closeButton/CloseButton";
import { Project } from "../types/project";
import ModalHeader from "./ModalHeader";
import ScreenshotList from "./ScreenshotList";
import ModalList from "./ModalList";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen) return null;

  const {
    period,
    title,
    tag,
    thumbnail,
    outline,
    features,
    contributions,
    screenshots,
  } = project;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedIndex === null) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selectedIndex]);

  return (
    <ModalOverlay onClick={onClose}>
      <CloseButton onClose={onClose} />
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalHeader title={title} period={period} tag={tag} />
          <main>
            <Image
              className="thumbnail"
              src={thumbnail}
              width={1600}
              height={900}
              alt={`${title} 대표 사진`}
            />
            <Outline>{outline}</Outline>
            <ModalList title={"💡 Features"} items={features} />
            <ModalList title={"👩🏻‍💻 Contributions"} items={contributions} />

            {Array.isArray(screenshots) && (
              <ScreenshotList
                setSelectedIndex={setSelectedIndex}
                screenshots={screenshots}
              />
            )}
          </main>
        </ModalContent>

        {Array.isArray(screenshots) && selectedIndex !== null && (
          <FullScreenImageModal
            images={screenshots}
            currentIndex={selectedIndex}
            setCurrentIndex={setSelectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;
