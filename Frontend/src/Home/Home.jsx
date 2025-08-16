import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Backgrounds from "./Backgrounds";
import Cards from "./Charecters";
import Hero from "./Hero";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Backgrounds />
            <Footer />
        </div>
    )
}