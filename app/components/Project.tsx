import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    links: string[];
    index: number;
  };
}

function Project(props: Props) {
  const { title, description, tech, image, links, index } = props.project;

  return (
    <div className="project-wrapper clean-z">
      <div className="project-img-wrapper">
        <Image
            className="project-img"
            src={image}
            alt={`${title} image`}
            width={759}
            height={368}
          />
      </div>

      <div className="project-details clean-z">
        <div className="project-details-title">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-tech-wrapper">
          <p className="project-tech-title">Tecnológias</p>
          <div className="project-tech">
            {tech.map((tech) => {
              return (
                <div className="project-tech-item" key={index}>
                  <Image
                    className="project-icon"
                    width={50}
                    height={50}
                    src={`/icons/${tech}.svg`}
                    alt={`${tech} icon`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Project;
