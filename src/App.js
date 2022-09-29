import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import About from './components/about/About';
import Review from './components/review/Review';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Review />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
