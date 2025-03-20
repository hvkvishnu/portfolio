import { ResumeData } from "../../types/resume.types";
import { motion } from "framer-motion";
import Badge from "../common/Badge";
import ListWithIcons from "../common/List";

type ResumeCardProps = {
  resumeData: ResumeData;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeData }) => {
  return (
    <div className="rounded-xl card-animation hover:scale-100 p-6 flex flex-col gap-4 mt-5">
      <h2 className="header text-xl dark:text-white font-bold">
        {resumeData.title}
      </h2>
      {resumeData.period && (
        <Badge
          contents={[resumeData.period]}
          styleOverride=" dark:bg-gray-700/40 dark:hover:bg-indigo-600"
        />
      )}
      {resumeData.content.map((content) => (
        <div className="flex flex-col gap-4">
          {content.description && (
            <p className="italic text-gray-950 dark:text-indigo-500">
              {content.description}
            </p>
          )}
          {content.badge && (
            <Badge
              contents={[content.badge]}
              styleOverride=" dark:bg-gray-700/40 dark:hover:bg-indigo-600"
            />
          )}
          <div>
            {content.details.length < 2 ? (
              <p>{content.details[0]}</p>
            ) : (
              <ListWithIcons contents={content.details} />
            )}
          </div>
          {content.image && (
            <motion.img
              src={content.image}
              className="w-120 h-64 object-cover rounded-lg"
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResumeCard;
