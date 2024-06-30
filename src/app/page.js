import AboutUs from "@/components/AboutUs";
import Eventes from "@/components/Eventes";
import GetInTouch from "@/components/GetInTouch";
import JoinComunity from "@/components/JoinComunity";
import OurPartner from "@/components/OurPartner";
import OurTeam from "@/components/OurTeam";
import RagisterNow from "@/components/RagisterNow";

export default function Home() {
  return (
    <div className="bg-black space-y-7">
      <RagisterNow />
      <AboutUs />
      <Eventes />
      <JoinComunity />
      <OurPartner />
      <OurTeam />
      <GetInTouch />
    </div>
  );
}
