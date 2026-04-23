import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Intern (Google Cloud Platform)</h4>
                <h5>Wipro, Bengaluru</h5>
              </div>
              <h3>Nov 2025 – Mar 2026</h3>
            </div>
            <ul className="career-points">
              <li>Worked on client-side AI/ML solutions in the GCP ecosystem, contributing to internal and POC-based projects.</li>
              <li>Developed and tested Proof of Concepts (POCs) using GCP Agent Development Kit (ADK) for intelligent automation workflows.</li>
              <li>Designed and implemented multi-agent systems using MCP (Model Context Protocol) for log error detection, prompt evaluation and automated correction.</li>
              <li>Performed prompt engineering and prompt evaluation to optimize LLM responses for accuracy and efficiency.</li>
              <li>Conducted agent evaluation and performance tuning, improving reliability and response quality of AI agents.</li>
              <li>Integrated tool calling mechanisms within agents to enable dynamic execution of tasks and workflows.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI Developer Intern</h4>
                <h5>DigitaltransolsAI Private Limited</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <ul className="career-points">
              <li>Engineered a production-ready AI Call Agent using Bounfig, enabling automated and intelligent voice-based customer interactions.</li>
              <li>Built a full-stack GenAI application, integrating frontend interfaces with scalable backend AI services.</li>
              <li>Designed real-time conversational pipelines using LLMs, speech-to-text, and text-to-speech technologies.</li>
              <li>Developed backend systems using Python (FastAPI/Flask) with REST APIs and WebSockets for low-latency communication.</li>
              <li>Applied advanced prompt engineering and response optimization, improving AI interaction quality and contextual understanding.</li>
              <li>Integrated multi-service architecture, combining AI models, APIs, and cloud services for seamless operation.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in AI & Machine Learning</h4>
                <h5>Dr. Ambedkar Institute of Technology, Bengaluru</h5>
              </div>
              <h3>2022 – Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering in Artificial Intelligence and
              Machine Learning with a strong foundation in Python, data analysis,
              and AI model development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
