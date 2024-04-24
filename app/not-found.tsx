"use client";
import Link from "next/link";
import ChromeIcon from "@/components/icons/ChromeIcon";

export default function NotFound() {
  return (
    <body className="flex items-center justify-center gap-3 w-full h-screen overflow-hidden">
      <h1 className="flex flex-col w-full items-center justify-center font-absolut-pro text-4xl">
        <span>Not found!</span>
        <span className="font-absolut-pro">
          Click on the icon below to go home!
        </span>
      </h1>
      <Link href={"/"} className="animate-spin w-fit h-fit">
        <ChromeIcon height={36} width={36} />
      </Link>
    </body>
  );
}
