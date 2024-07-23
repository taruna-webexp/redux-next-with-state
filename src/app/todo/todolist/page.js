"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_LIST } from "../../../redux/action/toDoActions";

export default function TodoList() {
    // Access todos from the Redux store
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    
    dispatch(REMOVE_FROM_LIST(id));
  };

  return (
    <div className="w-full flex flex-col items-center px-8 py-4">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full flex justify-between items-center py-2">
          <span>{todo.item}</span>
          <button onClick={() => handleRemove(todo.id)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
