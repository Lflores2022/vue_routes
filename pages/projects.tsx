import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Project from "@/app/components/Project";
import Meta from "@/app/utils/Meta";

function Projects() {

  const projects = [
    {
      title: "Home Link",
      description: "Encuentra información relevante hacerca de mi trayectoria y experiencia en el Desarrollo Beb",
      tech: ["react", "nextjs", "js", "mongodb", "tailwind", "git"],
      image: "/home-link.svg",
      links: ["https://github.com/JulianARojasBernal", "https://github.com/JulianARojasBernal"],
      index: 0
    },
    {
      title: "Tiendas E-commerce",
      description: "Paginas integrales para venta de productos altamente eficientes, responsivas y rapidas",
      tech: ["react", "js", "tailwind", "scss" ,"git"],
      image: "/e-commerce.svg",
      links: ["https://github.com/JulianARojasBernal", "https://github.com/JulianARojasBernal"],
      index: 1
    }
  ]

  return (
    <>
      <div className="container">
        <Meta title="My Projects" />
        <Navbar />
      </div>
      <div className="container">
        <div className="project-head">
        <h1 className="projects-h1">Mis Proyectos</h1>
        </div>
      </div>
      <div className="container">
        <div className="project-container">
        {projects.map((project) => {
          return <Project key={project.index} project={project} />
        })}
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  )
}

export default Projects
