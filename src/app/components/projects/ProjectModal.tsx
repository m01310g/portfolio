import { ReactNode, useEffect, useState } from "react";
import {
  ContributionList,
  FeatureList,
  ModalContainer,
  ModalContent,
  ModalOverlay,
  Outline,
  ScreenshotGrid,
  ScreenshotList,
  Tag,
  TagList,
} from "./ProjectModal.styled";
import Image from "next/image";
import FullScreenImageModal from "./FullScreenImageModal";
import CloseButton from "../closeButton/CloseButton";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  period: string;
  title: string;
  tag: string[];
  thumbnail: string;
  outline: string;
  features: string[];
  contributions: string[];
  screenshots: string[];
}

const ProjectModal = ({
  isOpen,
  onClose,
  children,
  period,
  title,
  tag,
  thumbnail,
  outline,
  features,
  contributions,
  screenshots,
}: ProjectModalProps) => {
  if (!isOpen) return null;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !selectedImage) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selectedImage]);

  return (
    <ModalOverlay onClick={onClose}>
      {" "}
      <CloseButton onClose={onClose} />
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <header>
            <span className="period">{period}</span>
            <h2>{title}</h2>
            <TagList>
              {tag.map((t, idx) => (
                <Tag key={idx}>{t}</Tag>
              ))}
            </TagList>
          </header>
          <main>
            <Image
              className="thumbnail"
              src={thumbnail}
              width={1600}
              height={900}
              alt={`${title} 대표 사진`}
            />
            <Outline>{outline}</Outline>
            <FeatureList>
              <h3>💡 Features</h3>
              <ul>
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </FeatureList>
            <ContributionList>
              <h3>👩🏻‍💻 Contributions</h3>
              <ul>
                {contributions.map((contribution, idx) => (
                  <li key={idx}>{contribution}</li>
                ))}
              </ul>
            </ContributionList>
            <ScreenshotList>
              {screenshots.length > 0 && (
                <>
                  <h3>🖥️ Project Screenshots</h3>
                  <p className="sc-desc">
                    * 이미지 클릭 시 자세히 확인할 수 있습니다.
                  </p>
                  <ScreenshotGrid>
                    {screenshots.map((src, idx) => (
                      <Image
                        key={idx}
                        src={src}
                        alt={`스크린샷 ${idx + 1}`}
                        width={800}
                        height={600}
                        onClick={() => setSelectedImage(src)}
                      />
                    ))}
                  </ScreenshotGrid>
                </>
              )}
            </ScreenshotList>
          </main>
        </ModalContent>
        {selectedImage && (
          <FullScreenImageModal
            src={selectedImage}
            alt={`확대된 이미지`}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;
