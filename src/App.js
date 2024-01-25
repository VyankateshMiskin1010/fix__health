import "./App.css";
import Home from "./Components/Home";
import Ourexpertise from "./Components/Ourexpertise";
import Ourmethadology from "./Components/Ourmethadology";
import Doctors from "./Components/Doctors";
import Testimonials from "./Components/Testimonals";
import Consultationform from "./Components/Consultationform";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <Consultationform />
      <Doctors />
      <Ourexpertise />
      <Ourmethadology />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
