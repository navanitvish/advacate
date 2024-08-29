import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// Import your page components here
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
//import Services from "./pages/Services";
import Products from "./pages/Products";


import Footer from "./components/Footer";
import LawyersConnectPage from './pages/LawyersConnectPage';
import EStampPaperServices from "./pages/EStampPaperServices";
import RentalReceipts from "./pages/RentalReceipts";
import Ecommercecontracts from "./pages/Ecommercecontracts";
import HomeRentalAgreements from "./pages/HomeRentalAgreements";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
       
        <Route path="/products/rental-receipts" element={<RentalReceipts />} />
        <Route path="/products/e-stamp-paper-services" element={<EStampPaperServices />} />
        <Route path="/services/e-commerce-contracts" element={<Ecommercecontracts />} />
        <Route path="/lawyers-connect" element={<LawyersConnectPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services/house-agreements" element={<HomeRentalAgreements />} />
        <Route path="/products" element={<Products />} />
      
        
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
