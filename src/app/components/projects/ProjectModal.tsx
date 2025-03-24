import { ReactNode } from "react";
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from "./ProjectModal.styled";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ProjectModal = ({ isOpen, onClose, children }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;
