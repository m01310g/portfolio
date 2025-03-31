import Link from "next/link";
import Image from "next/image";
import { Header, Tag, TagList, UrlList } from "./ModalHeader.styled";

interface ModalHeaderProps {
  title: string;
  period: string;
  tag: string[];
  githubUrl?: string;
  deployUrl?: string;
}

const ModalHeader = ({
  title,
  period,
  tag,
  githubUrl,
  deployUrl,
}: ModalHeaderProps) => {
  return (
    <Header>
      <span className="period">{period}</span>
      <h2>{title}</h2>
      <TagList>
        {tag.map((t, idx) => (
          <Tag key={idx} $type={t}>
            {t}
          </Tag>
        ))}
      </TagList>
      <UrlList>
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={"/icons/github_white.webp"}
              alt="깃허브 아이콘"
              width={30}
              height={30}
            />
          </Link>
        )}
        {deployUrl && (
          <Link
            className="deploy-url"
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            배포 링크
          </Link>
        )}
      </UrlList>
    </Header>
  );
};

export default ModalHeader;
