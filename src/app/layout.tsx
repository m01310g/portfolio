import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts/pretendard";
import { dunggeunmo } from "./fonts/dunggeunmo";

export const metadata: Metadata = {
  title: "김민경 프론트엔드 개발자 포트폴리오",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kor"
      className={`${pretendard.variable} ${dunggeunmo.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
function localFont(arg0: {
  src: { path: string; weight: string }[];
  variable: string;
  display: string;
}) {
  throw new Error("Function not implemented.");
}
