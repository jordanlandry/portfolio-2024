import Project from "../components/Project";
import { projectData } from "../data/projectData";
import "./projectSection.scss";

export default function ProjectSection() {
  return (
    <>
      {projectData.map((project) => (
        <Project {...project} key={project.id} />
      ))}
    </>
  );
}
