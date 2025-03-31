import localFont from "next/font/local";

export const dunggeunmo = localFont({
  src: [
    {
      path: "../../../public/fonts/DungGenMo/DungGeunMo.woff2",
      weight: "400",
    },
  ],
  variable: "--font-dunggeunmo",
  display: "swap",
});
