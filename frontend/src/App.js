import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <BottomBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;