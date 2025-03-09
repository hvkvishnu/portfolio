import { EducationDetails } from "../../constants/education.constant";
import { ResumeData } from "../../types/resume.types";
import ResumeCard from "./ResumeCard";

const professional: ResumeData = {
  title: "B.E",
  content: [
    {
      description: "descrip",
      details: ["details"],
    },
  ],
};

const subHeadCss = "header text-2xl font-bold mb-4 line-after";

const Resume = () => {
  return (
    <section id="resume" className="h-auto p-6">
      <h2 className="header line-after text-4xl font-bold">Resume</h2>

      <div className="grid grid-cols-[1.5fr_1.75fr] gap-20 pt-10">
        <div>
          <div className={subHeadCss}>Education</div>
          {EducationDetails.map((e) => (
            <ResumeCard resumeData={e} />
          ))}
        </div>
        <div>
          <div className={subHeadCss}>Professional</div>
          <ResumeCard resumeData={professional} />
        </div>
        <div>
          <div className={subHeadCss}>Technical Skills</div>
          <ResumeCard resumeData={professional} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
