import { Container } from "react-bootstrap";
import ProjectItems from "./ProjectItems";

function Projects() {
  return (
    <>
      <Container className="p-4 py-16">
        <h1 className="text-center text-4xl font-bold  text-[#001b5e]">
          Project
        </h1>
        <p className="py-4 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          consectetur, quia vitae sapiente expedita non quo illo modi provident
          praesentium?
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItems title="some app" img="image/project-1.png" />
          <ProjectItems title="some app" img="image/project-2.jpg" />
          <ProjectItems title="some app" img="image/project-3.jpg" />
          <ProjectItems title="some app" img="image/project-4.png" />
        </div>
      </Container>
    </>
  );
}

export default Projects;
