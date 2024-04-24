"use client"; // Error components must be Client Components

import { Aperture } from "lucide-react";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }, [error]);

  return (
    <body className="flex items-center justify-center w-full h-screen overflow-hidden">
      <span
        onClick={() => {
          window.location.reload();
        }}
        className="animate-spin w-fit h-fit"
      >
        <Aperture size={36} />
      </span>
    </body>
  );
}
