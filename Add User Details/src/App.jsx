import InputCard from "./Components/InputCard";
import ResultCard from "./Components/ResultCard";
import Warning1Popup from "./Components/Warning1Popup";
function App() {
  const getData = (data) => {
    data.map((e) => {});
  };

  return (
    <>
      <InputCard onGetData={getData} />
      <ResultCard />
      {/* <Warning1Popup /> */}
    </>
  );
}

export default App;
