import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <li className="todoItem">
      <p>{children}</p>
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i class="fa-regular fa-pen-to-square fa-2xl"></i>
        </button>

        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i class="fa-regular fa-trash-can fa-2xl"></i>
        </button>
      </div>
    </li>
  );
}
