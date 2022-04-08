import './App.css';

import Navbar from "./components/Navbar";
import Header from './components/Header';
import ParticlesBackground from './components/ParticlesBackground';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import ShapeComponent from './components/shapes';

function App() {
 return (
   <>
  {/* <ParticlesBackground />  */}

<ShapeComponent />
<Header /><Navbar />
<About />
<Form />
<Footer />
</>
  );
}

export default App;
