import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import ContactUs from './Pages/Contact';
import Form from './Pages/Form';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '220px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Corm" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
