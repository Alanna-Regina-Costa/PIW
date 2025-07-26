import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LiveTracking from './pages/LiveTracking';
import CursosVoo from './pages/CursosVoo';
import TurismoQuixada from './pages/TurismoQuixada';
import TourPilotos from './pages/TuorPilotos';
import BlogPage from './pages/Blog';
import './assets/styles/global.css';
import CursoIniciantes from './pages/CursoIniciantes';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tourpilotos" element={<TourPilotos />} />
            <Route path="/livetracking" element={<LiveTracking />} />
            <Route path="/cursosparavoo" element={<CursosVoo />} />
            <Route path="/turismoquixada" element={<TurismoQuixada />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/livetracking" element={<LiveTracking />} />
            <Route path="/cursoiniciantes" element={<CursoIniciantes />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;