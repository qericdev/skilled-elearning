import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Features/>
        <Navbar background={"dark"}/>
    </div>
  );
}

export default App;
