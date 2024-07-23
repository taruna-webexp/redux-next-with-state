"use client";
import React from "react";
;
import { Provider } from "react-redux";
import store from "../redux/store";
import AddList from "./todo/add/page";
import TodoList from "./todo/todolist/page";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex flex-col items-center justify-center px-4 gap-6">
        <p className="text-3xl font-semibold">Todo-List</p>
        <div className="w-full md:w-1/2 rounded-lg px-6 py-8 border-zinc-800">
          {/* add todo list */}
          <AddList />

          {/* list out todo list */}
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}
