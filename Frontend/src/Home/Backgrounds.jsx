import "../Styles/Home/Cards.css";

export default function Backgrounds() {
  const cardDetails = [
    { h1: "Img1", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img", p: "Details" },
    { h1: "Img10", p: "Details" },
  ];

  return (
    <div className="card-char">
        <h1 className="h1">Check out our Backgrounds</h1>
      <div className="card-container">
        {cardDetails.map((det, idx) => (
          <div key={idx} className="card-items">
            <h1>{det.h1}</h1>
            <p>{det.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
