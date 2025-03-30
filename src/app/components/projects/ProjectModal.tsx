import { useEffect, useState } from "react";
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
import { Project } from "./types/project";

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
          <header>
            <span className="period">{period}</span>
            <h2>{title}</h2>
            <TagList>
              {tag.map((t, idx) => (
                <Tag key={idx} $type={t}>
                  {t}
                </Tag>
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
                    {screenshots.map((screenshot, idx) => (
                      <div className="image-box" key={idx}>
                        <Image
                          src={screenshot.src}
                          alt={`스크린샷 ${idx + 1}`}
                          width={800}
                          height={600}
                          onClick={() => setSelectedIndex(idx)}
                        />
                        <p>{screenshot.caption}</p>
                      </div>
                    ))}
                  </ScreenshotGrid>
                </>
              )}
            </ScreenshotList>
          </main>
        </ModalContent>

        {selectedIndex !== null && (
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
