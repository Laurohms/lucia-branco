import CustomPageContainer from "../CustomPageContainer";
import HomeMenuCustomButton from "../HomeMenuCustomButton";

const HomeCustomMenu = () => {
  return (
    <CustomPageContainer
      el={[
        <HomeMenuCustomButton color="orange" text="Apartamentos" />,
        <HomeMenuCustomButton color="yellow" text="Moradores" />,
        <HomeMenuCustomButton color="green" text="Veículos" />,
        <HomeMenuCustomButton color="pink" text="Documentos" />,
      ]}
    ></CustomPageContainer>
  );
};

export default HomeCustomMenu;
