import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer';
import ProductList from './components/productList';
import Slider from './components/slider';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<>
          <Slider />
          <ProductList />
        </>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
