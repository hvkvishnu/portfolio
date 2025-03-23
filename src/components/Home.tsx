import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import coverImage from "../assets/cover.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex justify-center text-white"
      style={{ backgroundImage: `url(${coverImage})` }} // Replace with your image path
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center z-10 mt-10"
      >
        <h1 className="text-5xl md:text-6xl font-medium">Hello, I'm Vishnu</h1>
        <TypeAnimation
          sequence={[
            "An Engineer",
            1000, // Show for 1 second
            "A Tech Pioneer",
            1000,
            "An Innovator",
            1000,
          ]}
          wrapper="span"
          speed={30} // Typing speed
          repeat={Infinity} // Loop animation
          className="text-2xl font-semibold text-indigo-400"
        />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 z-10"
      >
        <Link
          to="about"
          smooth={true}
          duration={700}
          className="cursor-pointer text-indigo-500"
        >
          <ChevronDown size={40} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
