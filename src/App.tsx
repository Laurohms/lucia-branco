import HomeMenuCustomButton from "./components/HomeMenuCustomButton";
import MainCustomTitle from "./components/MainCustomTitle";

function App() {
  return (
    <div className="flex flex-col items-center justify-center md:justify-start">
      <MainCustomTitle text="Lucia Branco" />
      <div className="flex flex-col bg md:flex-row w-11/12 gap-4 p-4 m-6 rounded-md bg-slate-300 items-center justify-center shadow-md shadow-slate-500">
        <HomeMenuCustomButton color="orange" text="Apartamentos" />
        <HomeMenuCustomButton color="yellow" text="Moradores" />
        <HomeMenuCustomButton color="green" text="Veículos" />
        <HomeMenuCustomButton color="pink" text="Documentos" />
      </div>
    </div>
  );
}

export default App;
