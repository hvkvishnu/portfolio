import { JSX, ReactElement } from "react";

const InfoCards = ({
  data,
}: {
  data: { icon: JSX.Element; title: string; value: string | ReactElement }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-xl card-animation"
        >
          {item.icon}
          <div>
            <h4 className="text-base font-semibold header">
              {item.title}
            </h4>
            <p className="description">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
