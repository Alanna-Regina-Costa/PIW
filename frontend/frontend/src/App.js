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
import CursoVooDistancia from './pages/CursoVooDistancia';
import CursoVooTermicas from './pages/CursoVooTermicas';
import CursoRebocado from './pages/CursoRebocado';
import CursoResgate from './pages/CursoResgate'; 

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
            <Route path="/CursoVooDistancia" element={<CursoVooDistancia />} />
            <Route path="/cursovootermicas" element={<CursoVooTermicas />} />
            <Route path="/cursorebocado" element={<CursoRebocado />} />
            <Route path="/cursoresgate" element={<CursoResgate />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;