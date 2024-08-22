import React, { useEffect, useState } from "react";

function List() {
  const [inputValue, setInputValue] = useState("");
  const [doList, setDoList] = useState([]);

  function handleOnKeyDown(event) {
    if (event.key == "Enter") {
      if (inputValue === "") {
      }
      setDoList([...doList, inputValue]);
      setInputValue("");
    }
  }
  window.addEventListener("keydown", handleOnKeyDown);

  function handleOnClick() {
    const newArray = doList.slice();
    newArray.pop();
    setDoList(newArray);
  }

  return (
    <div className="row col-6 mx-auto bg-light rounded-2 completo">
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="What needs to be done?"
        className="input"
      />
      <ul className="bg-light">
        {doList.map((item, index) => (
          <li
            className="li m d-flex justify-content-between ps-1 fs-4 my-2 bg-light"
            key={index}
          >
            <button
              className="btn disp d-flex justify-content-between col-12 bg-light"
              onClick={handleOnClick}
            >
              <span className="bg-light">{item}</span>
              <span className="close bg-light">x</span>
            </button>
          </li>
        ))}
      </ul>
      <span className="bg-light rounded-5 rounded-top-0">
        {doList.length} {doList.length > 1 ? "items" : "item"} left
      </span>
    </div>
  );
}
export default List;
