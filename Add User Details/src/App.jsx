import { useState } from "react";

import InputCard from "./Components/InputCard";
import ResultCard from "./Components/ResultCard";
import Warning1Popup from "./Components/Warning1Popup";
function App() {
  const [responseData, setResponseData] = useState([]);
  // Function to update state with data
  const getData = (data) => {
    setResponseData(data);
  };

  return (
    <>
      <InputCard onGetData={getData} />
      {responseData[0] ? <ResultCard sentData={responseData} /> : null}
    </>
  );
}
export default App;
