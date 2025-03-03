import {
  FaEnvelope,
  FaGraduationCap,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import InfoCards from "./common/InfoCard";
import Badge from "./common/Badge";

const About = () => {
  const skills = [
    "Backend Development",
    "Web Applications",
    "Cloud Computing",
    "Generative AI",
  ];

  const infoData = [
    {
      icon: <FaEnvelope className="icon" />,
      title: "Email",
      value: (
        <a href="mailto:hvkvishnukumar11@gmail.com" className="link-line">
          hvkvishnukumar11@gmail.com
        </a>
      ),
    },
    {
      icon: <FaLocationArrow className="icon" />,
      title: "Location",
      value: "Coimbatore, Tamilnadu, India.",
    },
    {
      icon: <FaGraduationCap className="icon" />,
      title: "Education",
      value: "B.E in Computer Science",
    },
    {
      icon: <FaLinkedin className="icon" />,
      title: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/vishnukumarh20/"
          target="_blank"
          className="link-line"
        >
          vishnukumar20
        </a>
      ),
    },
  ];

  return (
    <section id="about" className="h-screen flex flex-col mt-10 px-10">
      <h2 className="line-after header text-4xl font-bold mb-10">About Me</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Profile Image */}
        <img
          src="src/assets/about.jpeg"
          alt="Personal Pic"
          className="w-100 h-130 object-cover rounded-2xl shadow-lg"
        />

        {/* Description */}
        <div className="flex flex-col gap-4">
          <h2 className="line-after header text-4xl font-bold">
            Senior Engineer
          </h2>
          {/* Skill Badges */}
          <Badge contents={skills} />

          <div className="description flex flex-col gap-6">
            <p>
              I am a Senior Software Engineer driven by a passion for building
              scalable, high-performance solutions that solve complex
              challenges. I graduated with an Engineering degree in Computer
              Science in 2021.
            </p>
            <p>
              My approach blends technical expertise with innovative
              problem-solving, allowing me to craft efficient and impactful
              systems.{" "}
            </p>
            <p>
              To me, technology is more than just writing code—it's about
              driving innovation, enhancing efficiency, and making a lasting
              impact.
            </p>
            <p>
              I completed my B.E. in CSE from{" "}
              <a
                className="link link-line"
                href="https://kongu.ac.in/"
                target="_blank"
              >
                KEC
              </a>{" "}
              and currently serve as a Senior Engineer at{" "}
              <a
                className="link link-line"
                href="http://presidio.com"
                target="_blank"
              >
                Presidio
              </a>
              .
            </p>
          </div>

          <InfoCards data={infoData} />
        </div>
      </div>
    </section>
  );
};

export default About;
