import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import SocialProof from "@/components/SocialProof";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Expertise />
      <SocialProof />
      <Location />
    </main>
  );
}
