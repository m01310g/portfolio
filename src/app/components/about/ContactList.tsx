import AboutContent from "./AboutContent";
import Image from "next/image";
import Link from "next/link";
import { ContactContainer, ContactItem } from "./ContactList.styled";
import { useCallback } from "react";

const ContactList = () => {
  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("m01310g@gmail.com");
    alert("이메일이 복사되었습니다!");
  }, []);

  return (
    <AboutContent title="📞 Contact">
      <ContactContainer>
        <ContactItem>
          <Image
            src={"/icons/github_white.png"}
            alt="깃허브 아이콘"
            width={25}
            height={25}
          />
          <Link
            href={"https://github.com/m01310g"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </ContactItem>
        <ContactItem>
          <Image
            src={"/icons/mail.png"}
            alt="메일 아이콘"
            width={25}
            height={25}
          />
          <p className="email" onClick={handleCopyEmail}>
            m01310g@gmail.com
          </p>
        </ContactItem>
      </ContactContainer>
    </AboutContent>
  );
};

export default ContactList;
