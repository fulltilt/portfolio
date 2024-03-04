import { MouseEventHandler } from "react";

type PropType = {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
};

const ProjectTag = ({ name, onClick, isSelected }: PropType) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover-border-white";
  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
