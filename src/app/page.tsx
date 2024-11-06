import NavigationBar from "./common/navigation-bar";
import Contact from "./pages/contact";
import Events from "./pages/events";
import Home from "./pages/home";
import Support from "./pages/support";
import Team from "./pages/team";

const Main = () => {
  return (
    <main>
      <NavigationBar />
      <Home />
      <Events />
      <Team />
      <Support />
      <Contact />
    </main>
  );
}

export default Main;
