// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import './main.css'


// Dynamically import the Home component
const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;