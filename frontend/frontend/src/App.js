import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './components/Sobre';
import Pilotos from './components/Pilotos';
import Eurismar from './components/Eurismar';
import Loja from './components/Loja';
import Blog from './components/Blog';
import './assets/styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/pilotos" element={<Pilotos />} />
          <Route path="/eurismar" element={<Eurismar />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;