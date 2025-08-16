import { useState, useEffect } from "react";
import "../Styles/Home/Hero.css";

export default function Hero() {
  const promos = [
    <div
      className="promo-1 fade-in"
      key="promo1"
      style={{
        "--after-bg": "linear-gradient(45deg, #fff, #ebb631, #ffb700)"
      }}
    >
      <div className="text">
        <h1 className="fs-3 h1">KRISHNA SERIES CHARACTERS</h1>
        <h1 className="w-75 h1-2">
          ALL <br /> CHARACTERS FOR GENUINE <br /> STORIES
        </h1>
        <span>Coming Soon</span>
      </div>
      <div className="img">
        <img src="/images/krishna.png" alt="Krishna" />
      </div>
    </div>,

    <div
      className="promo-1 fade-in"
      key="promo2"
      style={{
        "after-bg": "linear-gradient(45deg, #fff, #ebb631, #ffb700)",
      }}
    >
      <div className="text">
        <h1 className="fs-3 h1">GANESH SERIES CHARACTERS</h1>
        <h1 className="w-75 h1-2">
          ALL <br /> CHARACTERS FOR GENUINE <br /> STORIES
        </h1>
        <span>Coming Soon</span>
      </div>
      <div className="img">
        <img
          style={{ width: "320px" }}
          src="/images/Shri-Ganesh.png"
          alt="Krishna"
        />
      </div>
    </div>,

    <div
      className="promo-1 fade-in"
      key="promo3"
      style={{
        "after-bg": "linear-gradient(45deg, #fff, #ebb631, #ffb700)",
      }}
    >
      <div className="text">
        <h1 className="fs-3 h1">MONSTER SERIES CHARACTERS</h1>
        <h1 className="w-75 h1-2">
          ALL <br /> CHARACTERS FOR GENUINE <br /> STORIES
        </h1>
        <span>Coming Soon</span>
      </div>
      <div className="img">
        <img
          style={{ width: "320px" }}
          src="/images/Monster.png"
          alt="Krishna"
        />
      </div>
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [barTimer, setBarTimer] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === promos.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [promos.length]);

  return (
    <div className="home-hero">
      <div className="promo">{promos[currentIndex]}</div>
    </div>
  );
}
