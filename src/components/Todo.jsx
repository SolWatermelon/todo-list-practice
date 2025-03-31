import React, { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

const Todo = ({ todo, deleteHandler, completedHandler, editHandler, editTodo }) => {

  return (
    <>
      {todo.isEditing ? (
        <EditForm todo = {todo} editTodo={editTodo}/>
      ) : (
        <div
          className={todo.isCompleted ? "todo completed" : "todo"}
          onClick={() => {
            completedHandler(todo);
          }}
        >
          <p>{todo.content}</p>
          <div>
            {/* 給元件寫HTML屬性照理來說會變成PROPS，但此處卻可以套用STYLE */}
            {/* 因為此元件會把我們傳入的HTML屬性，另外再傳給HTML元素 */}
            {/* 此外也可以寫屬性className或屬性onClick等等 */}
            <MdEdit
              onClick={(e) => {
                e.stopPropagation();
                editHandler(todo);
              }}
              style={{ cursor: "pointer" }}
            />
            <MdDeleteForever
              onClick={(e) => {
                e.stopPropagation();
                deleteHandler(todo.id);
              }}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
