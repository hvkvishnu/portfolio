const About = () => {
  const badgeStyle =
    "inline-flex items-center rounded-full bg-purple-50 hover:bg-purple-600 px-3 py-1 text-md font-medium hover:text-white text-purple-700 ring-1 ring-purple-700/10 ring-inset transition-colors duration-300";

  return (
    <section id="about" className="h-screen flex flex-col mt-10 px-10">
      <h2 className="text-4xl font-bold mb-10">About Me</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Profile Image */}
        <img
          src="src/assets/about.jpeg"
          alt="Personal Pic"
          className="w-100 h-130 object-cover rounded-2xl shadow-lg"
        />

        {/* Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Senior Engineer</h2>

          {/* Skill Badges */}
          <div className="flex gap-4 flex-wrap">
            {["Backend Development", "Web Applications", "Generative AI"].map(
              (skill) => (
                <span key={skill} className={badgeStyle}>
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
