import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import profilePic from './HEADSHOT.jpg';
import Story1 from './Story1.jpg';
import Story2 from './Story2.jpg'
import Story3 from './Story3.jpg'
import Story4 from './Story4.jpg'
import ohVideo1 from './OH Sample Marketing Video 1.mp4';
import tobVideo1 from './ToB Sample Video 1.mp4';
import ftuVideo from './4TU Sample Post.mp4';
import ohVideo2 from './OH Sample Marketing Video 2.mp4'
import tobVideo2 from './ToB Sample Video 2.mp4'
import pcosvideo from './PCOS Post.mp4'

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const avatarRef = useRef(null);
  const [showHighlights, setShowHighlights] = useState(false);

  const stories = [
  { image: Story1 },
  { image: Story2 },
  { image: Story3 },
  { image: Story4 }
];


  const projects = [
  {
    id: 1,
    bg: 'gradient-rose-orange',
    title: 'TullyMD Instagram Series',
    description: 'As part of my Senior Design Project, I partnered with Hoboken-based OBGYN Dr. Nicole Tully to create a month-long Instagram series titled “Fourth Trimester, Unfiltered.” I designed branded infographic content and a series logo in Canva, publishing weekly posts focused on postpartum education and community-building. The campaign emphasized empathy and patient connection, resulting in consistent engagement through likes and comments and strengthening Instagram presence.',
    details: 'Fourth Trimester, Unfiltered',
    tags: ['content creation', 'engagement'],
    video: ftuVideo         // 👈 add this
  },
  {
    id: 2,
    bg: 'gradient-rose-orange',
    title: 'Taste of Boken',
    description: 'Taste of Boken is a Hoboken-based food review Instagram account I run as a creative passion project and testing ground for social media strategy. This post featured a review of a popular local restaurant, Alfalfa, with a focus on short-form video editing using CapCut. The account allows me to experiment with trends, storytelling, and engagement while supporting local businesses.',
    details: 'Alfalfa Review',
    tags: ['passion project', 'food reviews'],
    video: tobVideo1         // 👈 add this
  },
  {
    id: 3,
    bg: 'gradient-rose-orange',
    title: 'Oak House Events Promotional Video',
    description: 'I created this promotional video for The Oak House to highlight its private event offerings, with a strategic focus on reaching young women searching for bridal shower and celebration venues. The video combined event footage with trend-aware editing to increase discoverability and excitement. The content was well received, earning strong engagement through likes and shares while promoting the event capabilities of the restaurant.',
    details: 'An OH Bridal Shower',
    tags: ['event content', 'restauranttok'],
    video: ohVideo1                // or just leave video out
  },
  {
    id: 4,
    bg: 'gradient-rose-orange',
    title: 'The Oak House Promotional Video',
    description: 'While working as a host at The Oak House, I produce promotional social media content inspired by emerging restaurant and TikTok trends. This video used a popular audio format to showcase food and drinks in a visually appealing, fast-paced style. The short-form content generated thousands of views and helped drive excitement around the offerings of the restaurant.',
    details: 'I Just Needed A Little Oak House!',
    tags: ['content creation', 'trend tracking'],
    video: ohVideo2                // or just leave video out
  },
  {
    id: 5,
    bg: 'gradient-rose-orange',
    title: 'Taste of Boken',
    description: 'This video, posted on @tasteofboken, focused on promoting a healthy, positive relationship with food. The content emphasized food as both nourishment and enjoyment, aligning with my broader goal of using social media to share meaningful, values-driven messages. This project reflects my interest in creating content that connects emotionally with audiences while maintaining authenticity.',
    details: 'Life Is Worth Living',
    tags: ['inspirational', 'foodie'],
    video: tobVideo2                // or just leave video out
  },
  {
    id: 6,
    bg: 'gradient-rose-orange',
    title: 'Dr. Tully Concept Post',
    description: 'As part of the early planning phase of my Senior Design Project, I created concept Instagram posts for Dr. Nicole Tully to align on visual direction and messaging. This carousel focused on PCOS awareness, combining educational content with empathetic branding. The goal was to inform both current and prospective patients while reinforcing trust in her practice.',
    details: 'PCOS Awareness',
    tags: ['content creation', 'healthcare marketing'],
    video: pcosvideo                // or just leave video out
  },
];


  // -----------------------------
  // CURSOR → MOVE TO AVATAR + CLICK
  // -----------------------------
  useEffect(() => {
    // Move cursor to your face
    setTimeout(() => {
      if (!avatarRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();

      setCursorPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }, 800);

    // Click + trigger slide
    setTimeout(() => {
      setClicked(true);

      setTimeout(() => {
        setClicked(false);
        setShowHighlights(true);
        setCursorVisible(false);   // 👈 hide cursor after click animation
      }, 300);
  }, 2000);
}, []);


  const handleStoryClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = rect.width / 2;

    if (x < half && currentStory > 0) setCurrentStory(currentStory - 1);
    else if (x >= half && currentStory < stories.length - 1) setCurrentStory(currentStory + 1);
  };

  return (
    <div className="portfolio">

      {/* ----------------------------- */}
      {/* SLIDE WRAPPER → HERO + HIGHLIGHTS */}
      {/* ----------------------------- */}
      <div className={`slide-wrapper ${showHighlights ? 'show-right' : ''}`}>

        {/* HERO SECTION */}
        <section className="section hero-section">
          <div className="container-sm">
            <p className="section-label">Recommended For You</p>
            
            <div className="profile-card">
              <div className="profile-header">
                <img
                  src={profilePic}
                  alt="Madeleine Kennedy"
                  className="profile-avatar"
                  ref={avatarRef}
                />

                <div className="profile-info">
                  <div className="name-wrapper">
                    <h1 className={clicked ? 'clicked' : ''}>Madeleine Kennedy</h1>

                  {cursorVisible && (
                    <svg
                      className="cursor-icon"
                      style={{
                        left: `${cursorPos.x}px`,
                        top: `${cursorPos.y}px`,
                        opacity: cursorVisible ? 1 : 0,
                        transform: clicked ? 'scale(0.85)' : 'scale(1)'
                      }}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="black"
                      strokeWidth="1"
                    >
                      <path d="M4 2 L4 20 L8 14 L11 22 L13 21 L10 13 L16 13 Z" />
                    </svg>
                  )}
          
                </div>

                  <p className="profile-location">Marketing Innovation & Analytics Professional</p>
                </div>
              </div>
              
              <p className="profile-bio">
                Hi, welcome to my portfolio 👋🏻 My work lies in the intersection between data-driven marketing 📈 and creative digital storytelling 💭 Let's make some magic together ✨
              </p>
              
              <div className="profile-stats">
                <span><strong>35</strong> posts</span>
                <span><strong>703</strong> followers</span>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className="section highlights-section">
          <div className="container-sm">
            <p className="section-label">Highlights</p>

            <div className="story-container">
              <div className="story-card" onClick={handleStoryClick}>
                <div className="story-progress">
                  {stories.map((_, idx) => (
                    <div
                      key={idx}
                      className={`progress-bar ${idx <= currentStory ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>

                <div className="story-header">
                  <img src={profilePic} alt="Story Avatar" className="story-avatar" />
                  <span className="story-username">Madeleine Kennedy</span>
                </div>

                <div className="story-image">
                  <img src={stories[currentStory].image} alt="Story" className="story-image-file" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ----------------------------- */}
      {/* PROJECTS SECTION */}
      {/* ----------------------------- */}
      <section className="section projects-section">
        <div className="container-md">
          <p className="section-label">Trending</p>

          <div className="projects-grid">
            {projects.map((p, idx) => (
              
              <div
                key={p.id}
                className="project-item"
                onClick={() => setSelectedProject(p)}
              >
                <div className={"project-thumbnail"}>
                 
                  {p.video ? (
                    <video
                    src={p.video}
                    className="project-video-grid"
                    muted
                    autoPlay
                    loop
                    playsInline
                />
              ) : (
                <div className="project-placeholder">
                  <span>{p.title}</span>
                </div>
              )}

                  <div className="play-button">
                    <div className="play-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* PROJECT MODAL */}
      {/* ----------------------------- */}
      
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <video
                src={selectedProject.video}
                controls
                className="modal-video-player"
              />
            </div>

            <div className="modal-body">
              <h2>{selectedProject.title}</h2>
              <p className="modal-details">{selectedProject.details}</p>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <button className="close-button" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>

          </div>
        </div>
      )}


      {/* ----------------------------- */}
      {/* LINKS SECTION */}
      {/* ----------------------------- */}
      <section className="section links-section">
        <div className="container-sm">
          <p className="section-label">Suggested Profiles</p>

          <div className="links-list">

            <a href="https://linkedin.com/in/madeleine-kennedy-1318602b1" className="link-item" target="_blank" rel="noreferrer">
              <div className="link-icon linkedin">
                <span>💼</span>
              </div>
              <div className="link-info">
                <p className="link-name">LinkedIn</p>
                <p className="link-handle">Madeleine Kennedy</p>
              </div>
            </a>

            <a href="https://github.com/MaddieKennedy" className="link-item" target="_blank" rel="noreferrer">
              <div className="link-icon github">
                <span>💻</span>
              </div>
              <div className="link-info">
                <p className="link-name">GitHub</p>
                <p className="link-handle">@MaddieKennedy</p>
              </div>
            </a>

            <a href="mailto:madeleinemkennedy@gmail.com" className="link-item">
              <div className="link-icon email">
                <span>✉️</span>
              </div>
              <div className="link-info">
                <p className="link-name">Email</p>
                <p className="link-handle">madeleinemkennedy@gmail.com</p>
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
} 