import Image from "next/image";
import localFont from "next/font/local";
import { VideoCard } from "@/components/VideoCard";
import { VideGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";


export default function Home() {
  return (
    <div>
      <AppBar></AppBar>
     <VideGrid></VideGrid>
    </div>
  );
}