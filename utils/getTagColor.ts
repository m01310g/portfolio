import * as icons from "simple-icons";
import { SimpleIcon } from "simple-icons";

const exceptions: Record<string, keyof typeof icons | string> = {
  "next.js": "siNextdotjs",
  "styled-components": "siStyledcomponents",
  "node.js": "siNodedotjs",
  "socket.io": "siSocketdotio",
  "react query": "siReactquery",
  팀: "#4CAF50",
  개인: "#2196F3",
};

const toPascalCase = (str: string) =>
  str
    .replace(/\W+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

export const getTagColor = (tag: string): string => {
  const lower = tag.trim().toLowerCase();
  const normalized = toPascalCase(tag.trim());
  const exception = exceptions[lower];

  if (exception && exception.startsWith("#")) {
    return exception;
  }

  const key =
    (exception as keyof typeof icons) ??
    (`si${normalized.replace(/\W+/g, "")}` as keyof typeof icons);

  const icon = icons[key] as SimpleIcon;

  return icon?.hex ? `#${icon.hex}` : "#ffffff";
};
