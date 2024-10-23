import "./App.css";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import SecondContainer from "./components/SecondContainer/SecondContainer";
import { Service } from "./components/Service/Service";
import { ThirdContainer } from "./components/Third_container/ThirdContainer";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navigation />
      <SecondContainer />
      <ThirdContainer />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
