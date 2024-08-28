import Image from "next/image";
import Banner from "@/app/(components)/home/Banner";
import Hero from "@/app/(components)/home/Hero";

export default function Home() {
  return (
    <main className="h-screen">
      <Banner />
      <Hero />
    </main>
  );
}
