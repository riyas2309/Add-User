import React from "react";

function InputCard() {
  return (
    <div className=" mt-[5rem] p-5 bg-[#FFFF] flex items-center w-[50rem] rounded-lg">
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="" className="pb-2 font-bold">
            UserName
          </label>
          <input type="text" className="border border-gray-400 w-[47rem]" />
        </div>
        <div className="flex flex-col pb-5">
          <label htmlFor="" className="pb-2 font-bold">
            Age (years)
          </label>
          <input type="text" className="border border-gray-400 w-[47rem] " />
        </div>
        <button type="submit" className="p-2 bg-purple-500">
          Add User
        </button>
      </form>
    </div>
  );
}

export default InputCard;
