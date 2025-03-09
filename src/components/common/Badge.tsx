const Badge = ({
  contents,
  styleOverride,
}: {
  contents: string[];
  styleOverride?: string;
}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {contents.map((skill) => (
        <span key={skill} className={`badge badge-animate ${styleOverride ?? ""}`}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Badge;
