import { useState, ChangeEvent } from "react";
import { Button } from "../components/button";
import { Input } from "../components/Inputs";

import "../styles/style.scss";
export const Add_todo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [item, setItem] = useState("");
  const [index, setIndex] = useState(-1);
  const [Fruits, setFruits] = useState<{ name: string; id: number }[]>([]);

  const handleOnclickAdd = () => {
    item
      ? (setFruits((prev) => [...prev, { name: item, id: Fruits.length + 1 }]),
        setItem(""))
      : alert("Please Enter Item");
  };

  const handleOnclickUpdate = () => {
    Fruits[index].name = item;
    setIsEdit(false);
    setItem("");
  };

  const handleDelete = (index: number) => {
    setFruits((prev) => prev.filter((elem) => elem.id !== index));
  };

  const handleEdit = (index: number) => {
    setItem(Fruits[index].name);
    setIndex(index);
    setIsEdit(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  return (
    <div className="todo_body">
      <p className="title">ADDED ITEMS</p>
      <Input item={item} handleChange={handleInputChange} />
      {isEdit ? (
        <Button label="Update" onClickHandler={handleOnclickUpdate} />
      ) : (
        <Button label="Add" onClickHandler={handleOnclickAdd} />
      )}
      <div className="outputItems">
        {Fruits.length > 0
          ? Fruits.map((items, index) => (
              <div className="output" key={items.id}>
                <div className="idname">
                  <span>{index + 1}</span>
                  <span>{items.name}</span>
                </div>
                <div className="btns">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(items.id)}>Delete</button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
