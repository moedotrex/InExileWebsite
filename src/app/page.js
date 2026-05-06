import Image from "next/image";
import TitleSection from "./components/TitleSection";
import VideoSection from "./components/VideoSection";
import DirectorsSection from "./components/DirectorsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="container mx-auto px-12 py-4">
        <TitleSection />
        <VideoSection />
        <DirectorsSection />
        </main>
    </div>
  );
}
