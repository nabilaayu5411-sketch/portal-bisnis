import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FinancialManagement from "./components/FinancialManagement";
import HPPCalculator from "./components/HPPCalculator";
import SalesReport from "./components/SalesReport";
import FoodCashier from "./components/FoodCashier";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/financial" element={<FinancialManagement />} />
          <Route path="/hpp" element={<HPPCalculator />} />
          <Route path="/sales" element={<SalesReport />} />
          <Route path="/cashier" element={<FoodCashier />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
