import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { EnvelopeBudgetingPage } from "./pages/Product/CoreFeaturesPages/EnvelopeBudgeting.jsx";
import { PowerfulAutomationPage } from "./pages/Product/CoreFeaturesPages/PowerfulAutomation.jsx";
import { SeamlessBankIntegrationPage } from "./pages/Product/CoreFeaturesPages/SeamlessBankIntegration.jsx";
import { InsightfulReportsPage } from "./pages/Product/CoreFeaturesPages/InsightfulReports.jsx";
import { SupportedBanksPage } from "./pages/Product/CoreFeaturesPages/SupportedBanks.jsx";
import { DataProtectionPage } from "./pages/Product/SecurityReliabilityPages/DataProtection.jsx";
import { UptimeMonitoringPage } from "./pages/Product/SecurityReliabilityPages/UptimeMonitoring.jsx";
import { CompliancePage } from "./pages/Product/SecurityReliabilityPages/Compliance.jsx";
import { AboutUsPage } from "./pages/Company/AboutUs.jsx";
import { CareerPage } from "./pages/Company/Career.jsx";
import { ContactPage } from "./pages/Company/Contact.jsx";
import { PricingPage } from "./pages/Pricing";
import { BlogPage } from "./pages/Blog";
import { BlogArticlePage } from "./pages/Blog/Article";
import { CaseStudiesPage } from "./pages/CaseStudies";
import { WebinarsEventsPage } from "./pages/WebinarsEvents";
import { WebinarRegisterPage } from "./pages/WebinarsEvents/RegisterPage";
import { WebinarCalendarPage } from "./pages/WebinarsEvents/CalendarPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 max-w-[2000px] mx-auto md:px-10 w-full overflow-x-hidden">
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
            <Route path="/data-protection" element={<DataProtectionPage />} />
            <Route
              path="/uptime-monitoring"
              element={<UptimeMonitoringPage />}
            />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/articles" element={<BlogArticlePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/webinars-events" element={<WebinarsEventsPage />} />
            <Route
              path="/webinars/register"
              element={<WebinarRegisterPage />}
            />
            <Route
              path="/webinars/calendar"
              element={<WebinarCalendarPage />}
            />
          </Routes>
        </div>
        <div className="md:mx-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
