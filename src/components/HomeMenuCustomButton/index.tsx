interface HomeMenuCustomButtonProps {
  color: keyof typeof colorMap;
  text: string;
}
const colorMap = {
  orange: "bg-orange-500",
  yellow: "bg-amber-500",
  green: "bg-emerald-500",
  pink: "bg-pink-500",
};

const HomeMenuCustomButton = (props: HomeMenuCustomButtonProps) => {
  return (
    <div
      className={`flex w-[95%] h-24 shadow-sm hover:shadow-md hover:shadow-gray-900 transition-shadow duration-200 active:shadow-sm gap-12 shadow-gray-900 ${
        colorMap[props.color]
      } rounded-md items-center justify-center cursor-pointer font-semibold`}
    >
      {props.text}
    </div>
  );
};

export default HomeMenuCustomButton;
