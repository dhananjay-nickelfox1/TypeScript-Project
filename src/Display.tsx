import { ReactElement } from "react";
import "./App.css";
import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, editItem, changeValue } from "./slice/listSlice";
export const Display = (): ReactElement => {
  const inputList = useSelector((state: RootState) => state.list.value);
  const dispatch = useDispatch();
  const handleDelete = (id: number): void => {
    dispatch(deleteItem(id));
  };

  const onEditClick = (id: number, state: boolean): void => {
    dispatch(editItem(id));
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    const content: string = e.target.value;
    dispatch(changeValue({ id, content }));
  };

  return (
    <>
      <ul>
        {inputList.map((item) => (
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
