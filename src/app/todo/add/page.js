"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_LIST } from "../../../redux/action/toDoActions";

export default function AddList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue.trim()) {
        // Dispatch an action to add the item to the todo list
      dispatch(ADD_TO_LIST(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-8 py-4">
      <input
        type="text"
        placeholder="Enter text here"
        className="flex h-12 bg-transparent text-2xl font-semibold "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </div>
  );
}
