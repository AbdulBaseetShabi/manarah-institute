import NavigationBar from "./common/navigation-bar";
import Footer from "./pages/footer";
import FloatingButton from "./common/floating-button";
import routes from "./common/routes";

const Main = () => {
  return (
    <main>
      <NavigationBar />
      <div>
        {
          routes.map(({ id, view, hide }, index) => {
            if (hide) {
              return null;
            }

            return (
              <section key={id} id={id} className="w-full">
                {view}
              </section>
            );
          })
        }
        <Footer/>
        <FloatingButton />
      </div>
    </main>
  );
};

export default Main;
