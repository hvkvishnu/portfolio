import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-60 dark:bg-gray-950 bg-gray-50 w-full">
        <Home />

        <About />

        <Portfolio />

        <Contact />
      </main>
    </div>
  );
};

export default App;
