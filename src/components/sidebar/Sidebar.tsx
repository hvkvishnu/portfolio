import { Link } from "react-scroll";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";
import { FaAddressCard, FaBriefcase, FaHome, FaPhoneAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex flex-col gap-4 items-center py-10 shadow-lg">
      <Profile />

      <ThemeToggle />

      <nav className="mt-6 flex flex-col gap-8 text-lg">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex gap-4 text-gray-400 items-center"
        >
          <FaHome className="w-6 h-6" />
          <p className="hover:text-gray-50">Home</p>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer flex gap-4 text-gray-400 items-center"
        >
          <FaAddressCard className="w-6 h-6" />
          <p className="hover:text-gray-50">About</p>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer flex gap-4 text-gray-400 text-center"
        >
          <FaBriefcase className="w-6 h-6" />
          <p className="hover:text-gray-50">Portfolio</p>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer flex gap-4 text-gray-400 text-center"
        >
          <FaPhoneAlt className="w-6 h-6" />
          <p className="hover:text-gray-50">Contact</p>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
