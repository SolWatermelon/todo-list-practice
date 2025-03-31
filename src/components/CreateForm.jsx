import React, { useState } from "react";

const CreateForm = ({ setInputVal, inputVal, setTodos, todos }) => {
  const inputHandler = (e) => {
    setInputVal({
      content: e.target.value,
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        content: inputVal.content,
        id: inputVal.id,
        isCompleted: inputVal.isCompleted,
        isEditing: inputVal.isEditing,
      },
    ]);
    setInputVal({ content: "", id: null });
  };

  return (
    <form className="create-form" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={inputHandler}
        value={inputVal.content}
        placeholder="輸入代辦事項"
      />
      {/* 因為我們在此處type有設定成submit，所以form tag上的onSubmit在按下btn後會觸發 */}
      <button type="submit">提交</button>
    </form>
  );
};

export default CreateForm;
