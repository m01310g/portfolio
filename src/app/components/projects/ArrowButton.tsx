interface ArrowButtonProps {
  setCurrentIndex: (idx: number) => void;
  currentIndex: number;
  images: { src: string; caption: string }[];
  direction: "left" | "right";
}

const ArrowButton = ({
  setCurrentIndex,
  currentIndex,
  images,
  direction,
}: ArrowButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (direction === "left") {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  return (
    <button
      className={direction === "left" ? "arrow-left" : "arrow-right"}
      onClick={handleClick}
    >
      <svg
        width="12"
        height="24"
        viewBox="0 0 12 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            direction === "left"
              ? "M9.54801 6.57999L8.48701 5.51999L2.70801 11.297C2.61486 11.3896 2.54093 11.4996 2.49048 11.6209C2.44003 11.7421 2.41406 11.8722 2.41406 12.0035C2.41406 12.1348 2.44003 12.2648 2.49048 12.3861C2.54093 12.5073 2.61486 12.6174 2.70801 12.71L8.48701 18.49L9.54701 17.43L4.12301 12.005L9.54801 6.57999Z"
              : "M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
          }
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
