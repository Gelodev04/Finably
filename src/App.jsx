import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { EnvelopeBudgetingPage } from "./pages/Product/CoreFeatures/EnvelopeBudgeting/index.jsx";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-[2000px] mx-auto px-3 md:px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/envelope-budgeting"
            element={<EnvelopeBudgetingPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
