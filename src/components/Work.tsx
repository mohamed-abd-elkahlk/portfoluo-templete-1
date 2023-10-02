import { Container } from "react-bootstrap";
import WorkItems from "./WorkItems";
const data = [
  {
    year: "2022",
    title: "google",
    duration: "3 Years",
    detalies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates ex, aliquid ipsum iste eum autem unde ducimus neque officia maiores aspernatur! Quia odio minima vero eveniet rerum fuga? Est?",
  },
  {
    year: "2017",
    title: "facebook",
    duration: "3 Years",
    detalies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates ex, aliquid ipsum iste eum autem unde ducimus neque officia maiores aspernatur! Quia odio minima vero eveniet rerum fuga? Est?",
  },
  {
    year: "2022",
    title: "amazonn",
    duration: "3 Years",
    detalies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates ex, aliquid ipsum iste eum autem unde ducimus neque officia maiores aspernatur! Quia odio minima vero eveniet rerum fuga? Est?",
  },
  {
    year: "2002",
    title: "content creator",
    duration: "3 Years",
    detalies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates ex, aliquid ipsum iste eum autem unde ducimus neque officia maiores aspernatur! Quia odio minima vero eveniet rerum fuga? Est?",
  },
  {
    year: "2012",
    title: "some others data",
    duration: "3 Years",
    detalies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates ex, aliquid ipsum iste eum autem unde ducimus neque officia maiores aspernatur! Quia odio minima vero eveniet rerum fuga? Est?",
  },
];

function Work() {
  return (
    <>
      <Container className="p-4 py-16 m-auto md:pl-20">
        <h1 className="text-center text-4xl font-bold  text-[#001b5e]">Work</h1>
        {data.map((items, id) => (
          <WorkItems
            key={id}
            year={items.year}
            title={items.title}
            detalies={items.detalies}
            duration={items.duration}
          />
        ))}
      </Container>
    </>
  );
}

export default Work;
