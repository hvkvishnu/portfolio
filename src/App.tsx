import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-60 dark:bg-gray-950 bg-gray-50 w-full">
        <Home />

        <About />

        <Projects />

        <Contact />
      </main>
    </div>
  );
};

export default App;
