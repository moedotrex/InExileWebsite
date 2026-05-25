import Image from "next/image";
import TitleSection from "./components/TitleSection";
import VideoSection from "./components/VideoSection";
import DirectorsSection from "./components/DirectorsSection";
import FullDocumentarySection from "./components/FullDocumentarySection";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="container mx-auto px-12 py-4">
        <TitleSection />
        <FullDocumentarySection />
        <VideoSection />
        <DirectorsSection />
        </main>
    </div>
  );
}
