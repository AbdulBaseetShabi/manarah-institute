import NavigationBar from "./common/navigation-bar";
import Footer from "./pages/footer";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Support from "./pages/support";
import Team from "./pages/team";
import Testimonials from "./pages/testimonials";
import Values from "./pages/values";
import Events from "./pages/events";

const Main = () => {
  return (
    <main>
      <NavigationBar />
      <div>
        <Home />
        <Values/>
        <Events />
        <Team />
        <Support />
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
};

export default Main;
