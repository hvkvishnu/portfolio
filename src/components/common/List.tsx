import DOMPurify from "dompurify";

export const ListWithIcons = ({ contents }: { contents: string[] }) => {
  return (
    <ul className="relative space-y-2">
      {contents.map((item, index) => (
        <li key={index} className="relative pl-6">
          <span className="absolute left-0 text-xs/8 text-indigo-500">▹</span>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item),
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListWithIcons;
