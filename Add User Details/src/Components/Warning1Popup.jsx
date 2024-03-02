import React from "react";

function Warning1Popup() {
  return (
    <div className=" mt-[5rem] p-5 bg-[#FFFF] flex  w-[50rem] rounded-lg flex-col">
      <div className="bg-[#] w-[50rem] h-[4rem] -ml-5 -mt-5 rounded-t-lg bg-purple-500  flex items-center">
        <h1 className="p-5 font-extrabold text-[25px] text-[#fff]">
          Invalid Input
        </h1>
      </div>

      <p className="pt-10 pb-10">
        Please Enter the valid name and age (non-empty values).
      </p>
      {/* <p className="pt-10 pb-10">Please Enter a valid age ({">"}0).</p> */}
      <button className="p-2 bg-purple-500 w-fit ml-[44rem]">okay</button>
    </div>
  );
}

export default Warning1Popup;
