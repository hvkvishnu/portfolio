import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-lg">{theme === "dark" ? "🌙" : "☀️"}</span>
      <div
        className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all duration-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <motion.div
          className="w-5 h-5 bg-white dark:bg-yellow-400 rounded-full shadow-md"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          animate={{ x: theme === "dark" ? 24 : 0 }}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
