import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Signup from './components/Signup';
// import Login from './components/Login';
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
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300}
      >
        <div className="page-wrapper transition-opacity duration-1000 ease-in-out">
          <Routes location={location}>
            <Route path="/" element={<BottomBar><Home /></BottomBar>} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
