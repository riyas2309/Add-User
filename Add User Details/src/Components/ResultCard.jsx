import React from "react";
import { v4 as uuidv4 } from "uuid";
function ResultCard(props) {
  const data = props.sentData;
  // data.map((e) => {
  //   console.log(e.name);
  //   console.log(e.age);
  // });
  return (
    <div className=" mt-[5rem] p-5 pb-0 bg-[#FFFF] flex items-center w-[50rem] rounded-lg flex-col">
      {data.map((e) => {
        return (
          <p
            key={uuidv4()}
            className="border border-black w-[47rem] justify-center pl-3 pt-2 pb-2 mb-5"
          >
            {e.name} {e.age}(Years)
          </p>
        );
      })}
    </div>
  );
}

export default ResultCard;
