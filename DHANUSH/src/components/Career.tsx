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
                <h4>AI/ML Engineer</h4>
                <h5>Altimetrik Pvt. Ltd.</h5>
              </div>
              <h3>Current</h3>
            </div>
            <ul className="career-points">
              <li>Developing scalable AI-driven solutions and advanced machine learning models.</li>
              <li>Designing agentic workflows, multi-agent systems, and production AI services.</li>
              <li>Optimizing LLM performance, prompt engineering, and core AI infrastructure.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer Intern</h4>
                <h5>DigitaltransSolution AI Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <ul className="career-points">
              <li>Built Schedura – Enterprise AI Healthcare Voice Agent Platform using LLMs, FastAPI, AWS Lambda, DynamoDB, Redis, Multi-Agent Systems, Voice AI (STT/TTS), Twilio, Google Calendar, and Razorpay.</li>
              <li>Engineered intelligent appointment scheduling, AI voice conversations, payment orchestration, calendar integration, and automated consultation summaries.</li>
              <li>Designed low-latency real-time conversational pipelines and scalable cloud backend AI services with REST APIs & WebSockets.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Automation Intern</h4>
                <h5>EssilorLuxottica</h5>
              </div>
              <h3>2025</h3>
            </div>
            <ul className="career-points">
              <li>Designed and implemented AI/ML automation workflows and computer vision solutions for enterprise operations.</li>
              <li>Automated repetitive processes and optimized data workflows using machine learning techniques.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Intern (Google Cloud Platform)</h4>
                <h5>Wipro</h5>
              </div>
              <h3>2025 – 2026</h3>
            </div>
            <ul className="career-points">
              <li>Worked on client-side AI/ML solutions in the GCP ecosystem, contributing to internal and POC-based projects.</li>
              <li>Developed and tested Proof of Concepts (POCs) using GCP Agent Development Kit (ADK) for intelligent automation workflows.</li>
              <li>Designed and implemented multi-agent systems using MCP (Model Context Protocol) for log error detection, prompt evaluation, and automated correction.</li>
              <li>Performed prompt engineering, evaluation, and tool calling mechanisms (A2A) to enable dynamic task execution.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in Artificial Intelligence & Machine Learning</h4>
                <h5>Dr. Ambedkar Institute of Technology, Bengaluru</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering in Artificial Intelligence and
              Machine Learning with a strong foundation in Python, data analysis,
              DSA, OOP, DBMS, and AI model development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
