interface CustomPageContainerProps {
  el: JSX.Element[];
}

const CustomPageContainer = (props: CustomPageContainerProps) => {
  return (
    <div className="flex flex-col bg md:flex-row w-11/12 gap-4 p-4 m-6 rounded-md bg-slate-300 items-center justify-center shadow-md shadow-slate-500">
      {props.el}
    </div>
  );
};

export default CustomPageContainer;
