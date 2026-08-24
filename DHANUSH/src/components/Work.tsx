import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects: ProjectData[] = [
  {
    title: "Schedura",
    category: "Enterprise AI Healthcare Voice Agent Platform",
    tools: "LLMs, FastAPI, AWS Lambda, DynamoDB, Redis, Voice AI (STT/TTS), Twilio, Google Calendar, Razorpay",
    image: `${import.meta.env.BASE_URL}images/Maxlife.png`,
    description: "Built a production-ready Agentic AI platform using LLMs, FastAPI, AWS Lambda, DynamoDB, Redis, Multi-Agent Systems, Voice AI (STT/TTS), Twilio, Google Calendar, and Razorpay. Implemented intelligent appointment scheduling, AI voice conversations, payment orchestration, calendar integration, reminder automation, and AI-generated consultation summaries within a scalable serverless architecture.",
    features: [
      "Intelligent appointment scheduling with Google Calendar integration",
      "Real-time AI voice conversations (STT/TTS) powered by Twilio telephony",
      "Payment orchestration integrated with Razorpay",
      "Automated reminder workflows and AI consultation summaries",
      "Scalable serverless architecture using AWS Lambda, DynamoDB & Redis"
    ],
    link: "https://schedura.digitransolutions.in/"
  },
  {
    title: "AI Competitive Intelligence",
    category: "Multi-Agent Knowledge Graph System",
    tools: "LangGraph, Neo4j GraphRAG, FastAPI, Ollama, Qwen 2.5 7B",
    image: `${import.meta.env.BASE_URL}images/radix.png`,
    description: "Used LangGraph and Neo4j GraphRAG to analyze strategic positioning of major IT services firms (Infosys, TCS, Wipro, HCLTech, Accenture). Designed an autonomous multi-agent pipeline that crawls investor relations and news sources, extracts strategic entities into a knowledge graph using subject-predicate-object triples, and enables graph-based reasoning.",
    features: [
      "Multi-agent crawling pipeline for investor relations & news sources",
      "Knowledge graph modeling using subject-predicate-object triples in Neo4j",
      "Graph-based reasoning for partnership overlaps & AI expansion strategy",
      "FastAPI backend integrated with Ollama (Qwen 2.5 7B) & interactive dashboard"
    ],
    link: "https://github.com/DHANUSHMURTHY11"
  },
  {
    title: "GCP Agentic Solutions",
    category: "Google Cloud Platform AI/ML Engineering",
    tools: "GCP ADK, MCP (Model Context Protocol), LLMs, Prompt Engineering, Agent-to-Agent (A2A)",
    image: `${import.meta.env.BASE_URL}images/sapphire.png`,
    description: "Worked on client-side AI/ML solutions in the GCP ecosystem. Developed Proof of Concepts using GCP Agent Development Kit (ADK), multi-agent systems using MCP for log error detection, prompt evaluation, automated correction, and tool calling mechanisms.",
    features: [
      "Proof of Concepts (POCs) using GCP Agent Development Kit (ADK)",
      "Multi-agent systems using MCP (Model Context Protocol) for error detection & correction",
      "Prompt evaluation & agent performance tuning",
      "Tool calling & Agent-to-Agent (A2A) collaboration for automated workflows"
    ],
    link: "https://github.com/DHANUSHMURTHY11"
  },
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
    link: "https://github.com/DHANUSHMURTHY11"
  }
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
                          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
                            <button
                              className="view-project-btn"
                              onClick={() => setSelectedProject(project)}
                              data-cursor="pointer"
                            >
                              View Details
                            </button>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="view-project-btn"
                                data-cursor="pointer"
                                style={{
                                  textDecoration: "none",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px"
                                }}
                              >
                                Visit Live <MdArrowOutward />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noreferrer" data-cursor="pointer">
                            <WorkImage image={project.image} alt={project.title} />
                          </a>
                        ) : (
                          <WorkImage image={project.image} alt={project.title} />
                        )}
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
