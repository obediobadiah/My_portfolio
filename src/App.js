import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UIUXPortfolio from './uiux-portfolio/UIUXPortfolio';
import FullstackPortfolio from './fullstack-portfolio/FullstackPortfolio';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/fullstack" element={<FullstackPortfolio />} /> */}
        <Route path="/" element={<FullstackPortfolio />} />
        <Route path="/uiux" element={<UIUXPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
