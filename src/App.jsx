import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { EnvelopeBudgetingPage } from "./pages/Product/CoreFeatures/EnvelopeBudgeting/index.jsx";
import { PowerfulAutomationPage } from "./pages/Product/CoreFeatures/PowerfulAutomation/index.jsx";
import { SeamlessBankIntegrationPage } from "./pages/Product/CoreFeatures/SeamlessBankIntegration/index.jsx";
import { InsightfulReportsPage } from "./pages/Product/CoreFeatures/InsightfulReports/index.jsx";
import { SupportedBanksPage } from "./pages/Product/CoreFeatures/SupportedBanks/index.jsx";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 max-w-[2000px] mx-auto px-3 md:px-10 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/envelope-budgeting"
              element={<EnvelopeBudgetingPage />}
            />
            <Route
              path="/powerful-automation"
              element={<PowerfulAutomationPage />}
            />
            <Route
              path="/seamless-bank-integration"
              element={<SeamlessBankIntegrationPage />}
            />
            <Route
              path="/insightful-reports"
              element={<InsightfulReportsPage />}
            />
            <Route path="/supported-banks" element={<SupportedBanksPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
