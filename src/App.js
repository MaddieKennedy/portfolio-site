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
    description: 'As part of my Senior Design Project, the Hoboken-based OBGYN that my team is working with, Dr. Nicole Tully, asked us to create infographic posts to help market herself on Instagram. I decided, for the month of November 2025, to start a series entitled, "Fourth Trimester, Unfiltered." I created a logo for the series using Canva, and every Sunday we prepared a postpartum infographic for Dr. Tully to post on Instagram. The idea was simple yet intentional; "you are not alone." I sought to create a sense of community among the patients that Dr. Tully already sees, and to send out a warm welcome to new patients looking to start seeing Dr. Tully. And this was absolutely accomplished. There was consistent engagement on all "Fourth Trimester, Unfiltered" posts, including likes and comments, helping Dr. Tully market her business better on Instagram.',
    details: 'Fourth Trimester, Unfiltered',
    tags: ['content creation', 'engagement'],
    video: ftuVideo         // 👈 add this
  },
  {
    id: 2,
    bg: 'gradient-rose-orange',
    title: 'Taste of Boken',
    description: 'I run a Hoboken food review Instagram account just for fun and experimentation with social media. This is one review I posted about my favorite salad at a Hoboken favorite of mine and many others, Alfalfa. My goal with Taste of Boken is to play around with video editing on CapCut while spreading awareness about wonderful Hoboken businesses at the same time!',
    details: 'Alfalfa Review',
    tags: ['passion project', 'food reviews'],
    video: tobVideo1         // 👈 add this
  },
  {
    id: 3,
    bg: 'gradient-rose-orange',
    title: 'Oak House Events Promotional Video',
    description: 'I also film events at The Oak House to make fun videos showcasing all that the restaurant has to offer to those looking to host! With this specific video, I sought to (1) land on the Explore Pages of young women looking for cool and trendy bridal shower venue ideas and (2) inform Oak House regulars of the private event opportunities and excite them about the possibilities for their own events. The video was liked and shared by many, and helped promote the restaurant and all of its offerings.',
    details: 'An OH Bridal Shower',
    tags: ['event content', 'restauranttok'],
    video: ohVideo1                // or just leave video out
  },
  {
    id: 4,
    bg: 'gradient-rose-orange',
    title: 'The Oak House Promotional Video',
    description: 'During my time working as a host at The Oak House, I also film and create promotional content for the restaurant. While researching restaurant industry social media trends, I came across the simple yet beautiful and impactful idea of putting together short clips of Oak House food and drinks to a trending sound implying that the viewer just needs "a little bit of this," this being The Oak House. The short and sweet idea accumulated thousands of views on The Oak House Instagram, exciting people over the good-looking and even better-tasting food and drinks at the restaurant!',
    details: 'I Just Needed A Little Oak House!',
    tags: ['content creation', 'trend tracking'],
    video: ohVideo2                // or just leave video out
  },
  {
    id: 5,
    bg: 'gradient-rose-orange',
    title: 'Taste of Boken',
    description: 'This video posted on @tasteofboken was an absolute favorite of mine. As someone who has dealt with disordered eating in the past, I am deeply passionate about inspiring others to break the cycle of feeling the need to diet and fit a certain look. This video spreads the message that I believe is so important: life is worth living, so eat food for fuel AND for enjoyment. Food is fun, and that is part of why I started Taste of Boken! If this video reached just one person and helped them love themselves and eat something good after they watched it, then my mission was accomplished',
    details: 'Life Is Worth Living',
    tags: ['inspirational', 'foodie'],
    video: tobVideo2                // or just leave video out
  },
  {
    id: 6,
    bg: 'gradient-rose-orange',
    title: 'Dr. Tully Concept Post',
    description: 'Early on during my Senior Design Project, I made a couple of concept Instagram posts for Dr. Tully to look through and give feedback on, letting me know if they followed the direction in which she wanted her social media accounts to go. This was one of those concept posts. To spread awareness about PCOS while simultaneously marketing for Dr. Tully and her practice, I made a short Instagram carousel infographic. The goal of the post would have been to reach current and new patients, keeping them informed but also reminding them that Dr. Tully is always there for them.',
    details: 'PCOS Awareness',
    tags: ['content creation', 'healthcare marketing'],
    video: pcosvideo                // or just leave video out
  },
  
  // ...rest can be video: null or no video field
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