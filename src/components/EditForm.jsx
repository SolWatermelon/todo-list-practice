import React, {useState} from "react";

const EditForm = ({ todo, editTodo }) => {
  let [editInput, setEditInput] = useState(todo.content);
  const submitHandler = (e) => {
    e.preventDefault();
    editTodo(todo, editInput)
  };

  const inputHandler = (e) => {
    setEditInput(e.target.value);
  };
  return (
    <form className="create-form" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="輸入代辦事項"
        value={editInput}
      />
      {/* 因為我們在此處type有設定成submit，所以form tag上的onSubmit在按下btn後會觸發 */}
      <button type="submit">完成</button>
    </form>
  );
};

export default EditForm;
