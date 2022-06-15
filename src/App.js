import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import HomeBut from './pages/HomeBut';
import HomeUser from './pages/HomeUser';

function App() {
  return (
    <div className='w-full h-screen'>
      <Router>
        <Routes>
          <Route path="/apply" caseSensitive={false} element={<HomeUser />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
          <Route path="/" caseSensitive={false} element={<HomeBut />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
