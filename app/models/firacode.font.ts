import localFont from "@next/font/local";

export const firacode = localFont({
  src: [
    {
      path: "../FiraCode-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../FiraCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
