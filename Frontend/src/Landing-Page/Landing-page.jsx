import "../Styles/Landing-Page/Landing-Page.css";
import Course from "./Course";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function LandingPage({ themeBtn, color }) {
  return (
    <div className='land-page'> 
      <Header themeBtn={themeBtn} color={color} />
      <Hero color={color} />
      <Course color={color} />
      <Footer color={color} />
    </div>
  );
}