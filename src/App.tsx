import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import ScrollToTop from "./components/common/ScrollToTop";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex overflow-x-hidden">
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="lg:ml-60 dark:bg-gray-950 bg-gray-50 w-full">
        <Home />

        <About />

        <Portfolio />

        <Resume />

        <Contact />
      </main>
    </div>
  );
};

export default App;
