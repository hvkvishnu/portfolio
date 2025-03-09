export const ListWithIcons = ({ contents }: { contents: string[] }) => {
  return (
    <ul className="relative space-y-2">
      {contents.map((item, index) => (
        <li key={index} className="relative pl-6 text-gray-700">
          <span className="absolute left-0 text-indigo-500">▹</span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListWithIcons;
