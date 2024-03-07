import React, { useEffect, useState } from "react";
import Warning1Popup from "./Warning1Popup";
function InputCard(props) {
  const [value, setValue] = useState({
    name: "",
    age: "",
  });
  const [list, setlist] = useState([]);
  const [showWarning, setWarning] = useState(false);
  const [showWarningAge, setWarningAge] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: value.name,
      age: value.age,
    };
    if (data.name && data.age < 150 && data.age > 0) {
      setWarning(false);
      setWarningAge(false);
      setlist((pre) => [...pre, data]);
      setValue({ name: "", age: "" });
    } else if (data.age < 0) {
      setWarningAge(true);
      setWarning(false);
    } else {
      setWarning(true);
      setWarningAge(false);
    }
  };
  useEffect(() => props.onGetData(list), [list, props]);
  const close = () => {
    setWarning(false);
    setWarningAge(false);
  };
  return (
    <div className=" mt-[5rem] p-5 bg-[#FFFF] flex items-center w-[50rem] rounded-lg">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="" className="pb-2 font-bold">
            UserName
          </label>
          <input
            type="text"
            className="border border-gray-400 w-[47rem]"
            name="name"
            onChange={handleChange}
            value={value.name}
          />
        </div>
        <div className="flex flex-col pb-5">
          <label htmlFor="" className="pb-2 font-bold">
            Age (years)
          </label>
          <input
            type="number"
            className="border border-gray-400 w-[47rem] "
            name="age"
            onChange={handleChange}
            value={value.age}
          />
        </div>

        <button type="submit" className="p-2 bg-purple-500">
          Add User
        </button>
        <div className="absolute ml-[-20px] mt-[-10%]">
          {showWarning ? (
            <Warning1Popup
              value="Please Enter the valid name and age (non-empty values)."
              onClick={close}
            />
          ) : showWarningAge ? (
            <Warning1Popup
              value="Please Enter a valid age (>0)."
              onClick={close}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default InputCard;
