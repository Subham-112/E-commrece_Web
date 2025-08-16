export default function NewCourse() {
  const content = {
      title1: "2D",
      title2: 'ANIMATION',
      title3: 'COURSE',
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
            <span>
                <p>{content.title1}</p>
                <span>
                    <p>{content.title2}</p>
                    <p>{content.title3}</p>
                </span>
            </span>

        </div>
        <div className="new-course-image"></div>
      </div>
    </div>
  );
}
