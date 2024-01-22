import "./homeSection.scss";

export default function HomeSection() {
  return (
    <>
      <video
        className="home-section--video"
        src={"assets/videos/homepage_background.mp4"}
        autoPlay
        muted
        loop
      />
      <h1 className="home-section--title">JORDAN LANDRY</h1>
    </>
  );
}
