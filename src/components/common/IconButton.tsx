interface IconButtonProps {
  icon?: any;
  text?: any;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {
	const Icon = icon
  return (
    <div className="rounded-[4px] border border-[#FF3E26] px-4 py-2 cursor-pointer flex items-center justify-center w-full">
      <Icon className="text-[#FF3E26] text-xl" />
      <h3 className="text-base text-[#FF3E26] pl-3 font-anon">{text}</h3>
    </div>
  );
};
