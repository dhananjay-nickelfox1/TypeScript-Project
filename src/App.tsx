import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Display } from "./Display";

interface listType {
  content: string;
  id: number;
  edit: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<Array<listType>>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") onAddClick();
  };

  const onAddClick = (): void => {
    if (inputValue === "") return;
    setList([
      ...list,
      {
        content: inputValue,
        id: Math.random() * 100,
        edit: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <input
        onChange={handleOnChange}
        value={inputValue}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="card">
        <button onClick={onAddClick}>Add</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Display list={list} setList={setList} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
