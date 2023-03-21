import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mekatronika from './components/jurusan/Mekatronika';
import Pemesinan from './components/jurusan/Pemesinan';
import Tiprogram from './components/jurusan/Tiprogram';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './Homepage';
import Motor from './components/jurusan/Motor';
import Gallery from './components/Gallery';
import Information from './components/Information';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/informatika" element={<Tiprogram />} />
          <Route path="/mekatronika" element={<Mekatronika />} />
          <Route path="/pemesinan" element={<Pemesinan />} />
          <Route path="/sepedamotor" element={<Motor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/information" element={<Information />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
