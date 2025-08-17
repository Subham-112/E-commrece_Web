import "../Styles/Landing-Page/New-course.css";

export default function NewCourse({ color }) {
  const content = {
    title1: "2D",
    title2: "ANIMATION",
    title3: "COURSE",
    batch: "New Course",
    owner: "Binod Kumar",
    image: "/images/course.jpeg",
    description:
      "Start with a blank canvas and bring your ideas to life, frame by frame. Design, rig, and animate with bold lines and endless style. Whether you are drawing by hand or animating in Blender—there are no limits. Just pure 2D creativity in motion.",
  };
  return (
    <div className="new-course">
      <div className="new-course-container">
        <div className="content">
          <p className="batch">{content.batch}</p>
          <span className="title">
            <p className="title-1">{content.title1}</p>
            <span>
              <p className="title-2">{content.title2}</p>
              <p className="title-3">{content.title3}</p>
            </span>
          </span>
          <span className="owner">
            <span className="icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <span className="owner-name">
              <p
                style={{
                  color: color ? "#ece5ce" : "#5a5a5aff",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                Course by
              </p>
              <p style={{fontSize: '1.2rem', fontWeight: 600}}>{content.owner}</p>
            </span>
          </span>
          <p className="des">{content.description}</p>
        </div>
        <div className="new-course-image">
          <img src="/images/course.jpeg" alt={content.title2} />
        </div>
      </div>
    </div>
  );
}
