import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // Reload the page to check for an updated image.
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.replace(router.asPath.split("#")[0]);
  //   }, 5000);
  // }, [router]);

  return (
    <main>
      <div style={{ backgroundImage: 'url("/image41.jpg")' }} />
      <div style={{ backgroundImage: 'url("/image39.jpg")' }} />
      <div style={{ backgroundImage: 'url("/image40.jpg")' }} />
    </main>
  );
}
