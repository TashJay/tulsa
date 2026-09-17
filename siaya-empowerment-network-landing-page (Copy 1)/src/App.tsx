import { Footer, Grain, Marquee, Nav, ScrollProgress } from "./components/chrome";
import { Hero, Intro } from "./components/hero";
import { EducationMoment, Pillars } from "./components/pillars";
import { FieldJournal, PartnershipStrip } from "./components/journal";
import { AboutSen, ImpactGoals } from "./components/impact";
import { GetInvolved, WhereWeWork } from "./components/involved";
import { GalleryPage } from "./components/gallery";

export default function App() {
  if (window.location.pathname === "/gallery") {
    return <GalleryPage />;
  }

  return (
    <div className="overflow-x-clip bg-bone font-sans text-ink antialiased">
      <ScrollProgress />
      <Grain />
      <Nav />
      <main>
        {/* SIAYA */}
        <Hero />
        <Marquee />
        {/* THE PEOPLE + THE CHALLENGE */}
        <Intro />
        {/* THE RESPONSE: HEALTH → LAND → OPPORTUNITY */}
        <Pillars />
        {/* EDUCATION MOMENT */}
        <EducationMoment />
        {/* REAL WORK */}
        <FieldJournal />
        {/* PARTNERSHIP */}
        <PartnershipStrip />
        {/* IMPACT GOALS */}
        <ImpactGoals />
        {/* ABOUT · VISION · MISSION · HOW WE WORK */}
        <AboutSen />
        {/* WHERE WE WORK */}
        <WhereWeWork />
        {/* ACTION */}
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
