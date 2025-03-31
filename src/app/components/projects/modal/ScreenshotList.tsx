import Image from "next/image";
import { ScreenshotGrid, ScreenshotsList } from "./ScreenshotList.styled";

interface ScreenshotListProps {
  setSelectedIndex: (idx: number) => void;
  screenshots: { src: string; caption: string }[];
}

const ScreenshotList = ({
  setSelectedIndex,
  screenshots,
}: ScreenshotListProps) => {
  return (
    <ScreenshotsList>
      {Array.isArray(screenshots) && screenshots.length > 0 && (
        <>
          <h3>🖥️ Project Screenshots</h3>
          <p className="sc-desc">* 이미지 클릭 시 자세히 확인할 수 있습니다.</p>
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
    </ScreenshotsList>
  );
};

export default ScreenshotList;
