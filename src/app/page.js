import AboutUs from "@/components/AboutUs";
import Eventes from "@/components/Eventes";
import GetInTouch from "@/components/GetInTouch";
import RagisterNow from "@/components/RagisterNow";

export default function Home() {
  return (
    <div className="bg-[#1B1B1B]">
      <RagisterNow />
      <AboutUs />
      <Eventes />
      <GetInTouch />
    </div>
  );
}
