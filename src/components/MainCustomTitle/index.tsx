interface MainCustomTitleProps {
  text: string;
}

const MainCustomTitle = (props: MainCustomTitleProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-500">
        {props.text}
      </h1>
    </div>
  );
};

export default MainCustomTitle;
