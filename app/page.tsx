"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Reload the page to check for an updated image.
  useEffect(() => {
    setTimeout(() => {
      router.refresh();
    }, 5000);
  }, [router]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/image1.jpg")' }}
    ></main>
  );
}
