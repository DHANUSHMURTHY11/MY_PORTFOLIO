import { useEffect } from "react";
import "./styles/ProjectModal.css";
import { MdClose, MdArrowOutward } from "react-icons/md";

export interface ProjectData {
  title: string;
  category: string;
  tools: string;
  image: string;
  description: string;
  link?: string;
  features?: string[];
}

interface Props {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="project-modal-overlay">
      <div className="project-modal-content">
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
          data-cursor="pointer"
        >
          <MdClose />
        </button>

        <div className="project-modal-scroll">
          <div className="project-modal-header">
            <div className="project-modal-title">
              <h2>{project.title}</h2>
              <p className="project-category">{project.category}</p>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-visit-btn"
                data-cursor="pointer"
              >
                Visit Project <MdArrowOutward />
              </a>
            )}
          </div>

          <div className="project-modal-body">
            <div className="project-modal-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-modal-info">
              <div className="project-description-section">
                <h3>About the Project</h3>
                <p>{project.description}</p>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="project-features-section">
                  <h3>Key Features</h3>
                  <ul className="project-features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-tools-section">
                <h3>Tech Stack & Tools</h3>
                <p>{project.tools}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
