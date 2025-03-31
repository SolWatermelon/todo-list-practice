import React, { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  let [inputVal, setInputVal] = useState({
    content: "",
    id: null,
    isCompleted: false,
    isEditing: false,
  });

  let [todos, setTodos] = useState([]);

  const deleteHandler = (id) => {
    const deletedData = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(deletedData);
  };

  const completedHandler = (specificTodo) => {
    specificTodo.isCompleted = specificTodo.isCompleted ? false : true;
    let completedTodo = todos.map((todo) => {
      if (todo.id === specificTodo.id) {
        todo.isCompleted = specificTodo.isCompleted;
      }
      return todo;
    });

    setTodos(completedTodo);

    // 更好的寫法
    // setTodos(
    //   todos.map((todo) => {
    //     return todo.id === specificTodo.id
    //       ? { ...todo, isCompleted: !todo.isCompleted }
    //       : todo;
    //   })
    // );
  };

  const editHandler = (specificTodo) => {
    specificTodo.isEditing = specificTodo.isEditing ? false : true;
    let editingTodo = todos.map((todo) => {
      if (todo.id === specificTodo.id) {
        todo.isEditing = specificTodo.isEditing;
      }
      return todo;
    });

    setTodos(editingTodo);
  };

  const editTodo = (specificTodo, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === specificTodo.id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm
        setInputVal={setInputVal}
        inputVal={inputVal}
        todos={todos}
        setTodos={setTodos}
      />
      {todos.map((todo) => {
        {
          /* key要提前設定好，而不是在這裡臨時創建好 */
        }
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteHandler={deleteHandler}
            completedHandler={completedHandler}
            editHandler={editHandler}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
