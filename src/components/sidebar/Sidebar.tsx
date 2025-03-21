import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";
import {
  FaAddressCard,
  FaBriefcase,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(".toggle-btn")
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 text-white bg-indigo-600 p-3 rounded-full lg:hidden"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-60 bg-gray-800 text-white flex flex-col gap-4 items-center py-10 shadow-lg
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out lg:translate-x-0 z-50`}
      >
        <Profile />
        <ThemeToggle />

        <nav className="mt-6 flex flex-col gap-8 text-lg">
          {[
            { to: "home", icon: <FaHome />, label: "Home" },
            { to: "about", icon: <FaAddressCard />, label: "About" },
            { to: "portfolio", icon: <FaBriefcase />, label: "Portfolio" },
            { to: "resume", icon: <FaFile />, label: "Resume" },
          ].map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              className="sidenav-link group"
              activeClass="active"
              spy={true}
              onClick={toggleSidebar} // Auto-close sidebar on link click
            >
              <div className="sidenav-icon">{icon}</div>
              <p className="sidenav-menu">{label}</p>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
