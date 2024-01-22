import { ScreenSizeContext } from "./context/screenSizeContext";
import { useWindowSize } from "./hooks/useWindowSize";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import BallTrackerSection from "./sections/projects/BallTrackerSection";
import ChessEngineSection from "./sections/projects/ChessEngineSection";
import GolfSection from "./sections/projects/GolfSection";
import GuitarHeroSection from "./sections/projects/GuitarHeroSection";
import MinecraftSection from "./sections/projects/MinecraftSection";
import RubiksCubeSection from "./sections/projects/RubiksCubeSection";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <>
      <ScreenSizeContext.Provider value={{ width, height }}>
        <HomeSection />
        <AboutSection />
        <BallTrackerSection />
        <ChessEngineSection />
        <RubiksCubeSection />
        <MinecraftSection />
        <GuitarHeroSection />
        <GolfSection />
      </ScreenSizeContext.Provider>
    </>
  );
}
