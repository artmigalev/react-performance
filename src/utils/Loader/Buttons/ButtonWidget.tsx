const ButtonWidget = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute top-0 right-0 p-0.5  rounded-[5px] bg-gray-500 cursor-pointer active:border text-center w-[20px]"
    >
      ...
    </button>
  );
};
export default ButtonWidget;
