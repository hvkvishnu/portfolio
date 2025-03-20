import { JSX, ReactElement } from "react";

const InterestCard = ({
  data,
}: {
  data: { icon: JSX.Element; value: string | ReactElement }[];
}) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-xl card-animation card-hover-color group"
        >
          <span>{item.icon}</span>
          <p className="description">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default InterestCard;
