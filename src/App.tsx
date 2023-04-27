import { useState } from "react";
import "./App.css";
import { Display } from "./Display";
import { Counter } from "./Counter";
import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { inputChange } from "./slice/inputSlice";
import { addItem } from "./slice/listSlice";
interface listType {
  content: string;
  id: number;
  edit: boolean;
}

function App() {
  const input = useSelector((state: RootState) => state.input.value);
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    dispatch(inputChange(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") onAddClick();
  };

  const onAddClick = (): void => {
    if (input === "") return;
    dispatch(
      addItem({
        content: input,
        id: Math.random() * 100,
        edit: false,
      })
    );
    dispatch(inputChange(""));
  };
  return (
    <>
      <div className="App">
        <h1>Vite + React</h1>
        <input
          onChange={handleOnChange}
          value={input}
          onKeyDown={handleKeyDown}
        ></input>
        <div className="card">
          <button onClick={onAddClick}>Add</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <Display />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Counter />
    </>
  );
}

export default App;
