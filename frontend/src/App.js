import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './pages/Home';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
};

const Content = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <BottomBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;
