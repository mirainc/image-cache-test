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
      <div style={{ backgroundImage: 'url("/image17.jpg")' }} />
      <div style={{ backgroundImage: 'url("/image18.jpg")' }} />
      <div style={{ backgroundImage: 'url("/image19.jpg")' }} />
    </main>
  );
}
