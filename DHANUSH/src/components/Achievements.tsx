import { useState, useCallback } from "react";
import "./styles/Achievements.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const achievements = [
  {
    title: "GenAI Developer",
    category: "Conversational AI & Full-Stack GenAI",
    description:
      "Engineered production-ready AI Call Agents and full-stack GenAI applications. Built real-time conversational pipelines using LLMs, speech-to-text, and text-to-speech technologies with scalable backend AI services.",
    image: `${import.meta.env.BASE_URL}images/genai_developer.png`,
  },
  {
    title: "Speed Cubing & Records",
    category: "WCA Competitions & National Records",
    description:
      "Member of Speed Cubing Bangalore. Organized WCA competitions including Karnataka Cube Championship 2024. Recognized by Asia Book of Records & India Book of Records (Team Recode — Mission Sindoor Cube Mosaic, Jan 2026).",
    image: `${import.meta.env.BASE_URL}images/speedcubing_records.png`,
  },
  {
    title: "NCC Cadet",
    category: "National Cadet Corps — A, B, C Certificates",
    description:
      "Completed NCC cadet training and achieved A, B, and C certificates, demonstrating discipline, leadership, and commitment to national service through rigorous training and examinations.",
    image: `${import.meta.env.BASE_URL}images/ncc_cadet.png`,
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    const newIndex =
      currentIndex === 0 ? achievements.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === achievements.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="achievements-section" id="achievements">
      <div className="achievements-container section-container">
        <h2>
          Achievements <span>&</span> Rewards
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous achievement"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next achievement"
            data-cursor="disable"
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
              {achievements.map((item, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{item.title}</h4>
                        <p className="carousel-category">{item.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Details</span>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={item.image} alt={item.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to achievement ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
