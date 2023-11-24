import React from "react";
import ExpensePage from "./pages/ExpensePage";
import StatisticsPage from "./pages/StatisticsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
