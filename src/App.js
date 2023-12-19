import './App.css';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-screen bg-black min-h-screen">
      <Navbar />
      <Home />
      <Features />
    </div>
  );
}

export default App;
