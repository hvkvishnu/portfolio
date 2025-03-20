import { Link } from "react-scroll";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";
import { FaAddressCard, FaBriefcase, FaHome } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white flex flex-col gap-4 items-center py-10 shadow-lg">
      <Profile />

      <ThemeToggle />

      <nav className="mt-6 flex flex-col gap-8 text-lg">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="sidenav-link group"
          activeClass="active"
          spy={true}
        >
          <FaHome className="sidenav-icon " />
          <p className="sidenav-menu">Home</p>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="sidenav-link group"
          activeClass="active"
          spy={true}
        >
          <FaAddressCard className="sidenav-icon" />
          <p className="sidenav-menu">About</p>
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="sidenav-link group"
          activeClass="active"
          spy={true}
        >
          <FaBriefcase className="sidenav-icon" />
          <p className="sidenav-menu">Portfolio</p>
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          className="sidenav-link group"
          activeClass="active"
          spy={true}
        >
          <FaFile className="sidenav-icon" />
          <p className="sidenav-menu">Resume</p>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
