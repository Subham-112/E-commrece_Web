import { useEffect, useRef } from "react";
import "../Styles/Landing-Page/Hero.css";

export default function Hero({ color }) {
  const trackRef = useRef(null);

  const messages = [
    "* all the best to all",
    "* keep creating",
    "* never stop learning",
    "* make it fun",
  ];

  // Duplicate messages to allow seamless looping
  const scrollingItems = [...messages, ...messages];

  useEffect(() => {
    const track = trackRef.current;
    let scrollPosition = 0;

    let animationFrameId;

    const scroll = () => {
      if (track) {
        scrollPosition += 2; // Speed of scroll
        if (scrollPosition >= track.scrollWidth / 2) {
          scrollPosition = 0; // Reset to create loop effect
        }
        track.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll(); // Start scrolling

    return () => cancelAnimationFrame(animationFrameId); // Cleanup
  }, []);

  return (
    <div className="hero">
      <div className="text-cont">
        <p>PRADHAN STUDIO</p>
        <hr style={color ? {
          border: '2px solid #ece5ce'
        } : {
          border: '2px solid #333'
        }} />
        <h1>Browse Characters</h1>
        <h1>Start Learning</h1>
        <h1>Explore the Collection</h1>
        <hr style={color ? {
          border: '2px solid #ece5ce',
          marginTop: "0.5rem"
        } : {
          border: '2px solid #333',
          marginTop: "0.5rem"
        }} />
        <span className="desc">
          <h1>Get fun 2D characters and easy courses to learn fast 🎨</h1>
          <h1>Make cool stuff and have fun while doing it 💥</h1>
        </span>

        <div className='hero-banner' style={{backgroundColor: color ? '#ece5ce' : '#333'}}>
          <div className='banner-track' ref={trackRef}>
            {scrollingItems.map((text, idx) => (
              <span key={idx}>
                <h1 style={{color: color ? '#333': '#ece5ce'}}>*</h1>
                <h1 style={{color: color ? '#333': '#ece5ce'}}>{text}</h1>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
