import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[2000px] mx-auto px-3 md:px-10">
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
