import { AccoladesDetails } from "../../constants/accolades.constant";
import { CertificationDetails } from "../../constants/certifications.constant";
import { EducationDetails } from "../../constants/education.constant";
import { ProfessionalDetails } from "../../constants/professional.constants";
import { TechnicalDetails } from "../../constants/technical.constant";
import ResumeCard from "./ResumeCard";

const subHeadCss = "header text-2xl font-bold line-after";

const Resume = () => {
  return (
    <section id="resume" className="h-auto p-6">
      <h2 className="header line-after text-4xl font-bold">Resume</h2>

      <div className="grid md:grid-cols-[1.5fr_1.75fr] gap-20 pt-10">
        <div className="flex flex-col gap-15" id="column-left">
          <div>
            <div className={subHeadCss}>Education</div>
            {EducationDetails.map((e) => (
              <ResumeCard resumeData={e} />
            ))}
          </div>
          <div>
            <div className={subHeadCss}>Technical Skills</div>
            {TechnicalDetails.map((e) => (
              <ResumeCard resumeData={e} />
            ))}
          </div>
          <div>
            <div className={subHeadCss}>Certifications</div>
            {CertificationDetails.map((e) => (
              <ResumeCard resumeData={e} />
            ))}
          </div>
          <div>
            <div className={subHeadCss}>Accolades</div>
            {AccoladesDetails.map((e) => (
              <ResumeCard resumeData={e} />
            ))}
          </div>
        </div>

        <div id="column-right">
          <div>
            <div className={subHeadCss}>Professional Experience</div>
            {ProfessionalDetails.map((e) => (
              <ResumeCard resumeData={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
