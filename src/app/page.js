import Image from "next/image";
import TitleSection from "./components/TitleSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-12 py-4">
        <TitleSection />
        <VideoSection />
        </main>
    </div>
  );
}
