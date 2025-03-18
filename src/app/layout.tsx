import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="kor">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
