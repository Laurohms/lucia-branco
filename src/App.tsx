import HomeCustomMenu from "./components/HomeCustomMenu";
import MainCustomTitle from "./components/MainCustomTitle";

function App() {
  return (
    <div className="flex flex-col items-center justify-center md:justify-start">
      <MainCustomTitle text="Lucia Branco" />
      <HomeCustomMenu />
    </div>
  );
}

export default App;
