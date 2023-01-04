import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Popular from "./components/Popular";
import Trip from "./components/Trip";

const App = () => {
  return (
    <div>
      <Gallery />
      <Hero />
      <Popular />
      <Offer />
      <Blog />
      <Trip />
      <Experiences />
      <Footer />
    </div>
  );
};

export default App;
