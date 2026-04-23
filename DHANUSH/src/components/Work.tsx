import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects: ProjectData[] = [
  {
    title: "Urban Agri",
    category: "AI-Based Urban Farming Guidance",
    tools: "Python, AI/ML, Computer Vision, Flask, Full-Stack",
    image: `${import.meta.env.BASE_URL}images/Solidx.png`,
    description: "Urban Agri is a comprehensive AI-driven platform for urban farmers, designed to optimize growing conditions and predict crop yields using machine learning and computer vision. The system analyzes real-time environmental factors to provide customized farming strategies.",
    features: [
      "Real-time crop disease detection using Computer Vision",
      "Automated growth recommendations based on local climate data",
      "Interactive dashboard for tracking farm metrics",
      "Full-stack architecture integrating Flask backend and GenAI"
    ],
    link: "https://github.com/dhanush-xyz/urban-agri" 
  },
  {
    title: "AI Competitive Intelligence",
    category: "Multi-Agent Knowledge Graph System",
    tools: "LangGraph, Neo4j, FastAPI, Ollama, Qwen 2.5 7B",
    image: `${import.meta.env.BASE_URL}images/radix.png`,
    description: "A deep-tech application that automates competitive intelligence gathering by using a multi-agent orchestrated system. It builds a knowledge graph from disparate data sources to track competitors, market trends, and sentiment anomalies in near real-time.",
    features: [
      "Multi-agent architecture coordinated with LangGraph",
      "Graph-based relationships modeled via Neo4j",
      "In-house optimized local LLMs inference using Ollama & Qwen 2.5 7B",
      "High-performance REST API built on FastAPI"
    ],
    link: "https://github.com/dhanush-xyz/ai-competitive-intelligence"
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>

          <div className="carousel-wrapper">
            {/* Navigation Arrows */}
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="pointer"
            >
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="pointer"
            >
              <MdArrowForward />
            </button>

            {/* Slides */}
            <div className="carousel-track-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div className="carousel-slide" key={index}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">{project.category}</p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                          <button
                            className="view-project-btn"
                            onClick={() => setSelectedProject(project)}
                            data-cursor="pointer"
                          >
                            View Project
                          </button>
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage image={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Work;
