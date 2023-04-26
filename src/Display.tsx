import { ReactElement } from "react";
import "./App.css";

interface listType {
  content: string;
  id: number;
  edit: boolean;
}

type displayProps = {
  list: Array<listType>;
  setList: React.Dispatch<React.SetStateAction<Array<listType>>>;
};

export const Display = ({ list, setList }: displayProps): ReactElement => {
  const handleDelete = (id: number): void => {
    setList(list.filter((item) => item.id !== id));
  };

  const onEditClick = (id: number, state: boolean): void => {
    const newList = [...list];
    newList.forEach((item) => {
      if (item?.id === id) item.edit = state;
    });
    setList(newList);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    const value: string = e.target.value;
    const newList = [...list];
    newList.forEach((item) => {
      if (item?.id === id) item.content = value;
    });
    setList(newList);
  };

  return (
    <>
      <ul>
        {list.map((item) => (
          <>
            <li>
              {!item?.edit && (
                <>
                  <span>{item?.content || "NA"}</span>
                  <button onClick={onEditClick.bind(null, item?.id, true)}>
                    Edit
                  </button>
                </>
              )}
              {item?.edit && (
                <>
                  <input
                    value={item?.content}
                    onChange={(e) => {
                      handleOnChange(e, item?.id);
                    }}
                  ></input>
                  <button onClick={onEditClick.bind(null, item?.id, false)}>
                    Save
                  </button>
                </>
              )}
              <button onClick={handleDelete.bind(null, item?.id)}>
                delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
