import Home from "./components/Home";
import About from "./components/About";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <div className="flex">
      <ScrollToTop />
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-60 dark:bg-gray-950 bg-gray-50 w-full">
        <Home />

        <About />

        <Portfolio />

        <Resume />
      </main>
    </div>
  );
};

export default App;
