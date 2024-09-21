import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Hero/Hero";
import ML from "./pages/ML/ml";
import DL from "./pages/DL/dl";
import VizAlgo from './pages/ML/vizalgo';
import Algos from './pages/ML/algo';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ml' element={<ML />} />
          <Route path='/dl' element={<DL />} />
          <Route path="/ml/:type" element={<Algos />} />
          <Route path="/ml/:type/:category" element={<Algos />} />
          <Route path="/ml/:type/:category/visualize/:algorithm" element={<VizAlgo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
