import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
