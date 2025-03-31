import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "../../../public/fonts/Pretendard/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../../public/fonts/Pretendard/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});
