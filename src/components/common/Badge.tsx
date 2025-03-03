const Badge = ({ contents }: { contents: string[] }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {contents.map(
        (skill) => (
          <span
            key={skill}
            className="badge inline-flex items-center rounded-full  px-3 py-1 text-md font-medium ring-1 ring-purple-700/10 ring-inset"
          >
            {skill}
          </span>
        )
      )}
    </div>
  );
};

export default Badge
