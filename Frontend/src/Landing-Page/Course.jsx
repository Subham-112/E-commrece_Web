import { Link } from 'react-router-dom'
import "../Styles/Landing-Page/Course.css";

export default function Course({ color }) {
  const cardDetails = [
    {
      title: "2D ANIMATION BASICS",
      catagory: "2D Animation",
      image: "/images/1st.jpg",
    },
    {
      title: "Learn & Create 2D Characters",
      catagory: "2D Animation",
      image: "/images/2nd.jpg",
    },
    {
      title: "Basic Tools of Animate CC",
      catagory: "Animate cc",
      image: "/images/3rd.png",
    },
  ];
  return (
    <div className="course">
      <div className="course-container">
        <h1>Easy to Start</h1>
        <h1 className="head">Beginner Friendly</h1>
        <div className="cards-grid">
          {cardDetails.map((card) => (
            <div className={`each-card ${color ? 'card-wh' : 'card-bl'}`}>
              <p>{card.catagory}</p>
              <h2>{card.title}</h2>
              <hr className={`hr ${color ? 'wh' : 'bl'}`} style={{width: '70%', marginBottom: '-1rem'}} />
              <span className='img-space'>
                <img src={card.image} alt={card.catagory} />
              </span>
              <hr className={`hr ${color ? 'wh' : 'bl'}`} style={{width: '70%', marginTop: '-1rem'}} />
              <Link className='learn-btn'>
                <span>Learn More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
