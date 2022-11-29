import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  compleatedTodos: Todo[];
  setCompleatedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, compleatedTodos, setCompleatedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId='TodosList'>
        {(provided) => (
          <div
            className="todos"
            ref = {provided.innerRef} 
            {...provided.droppableProps}
          >
            <span className="todos_heading">Training Menu</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index = {index}
                todo = {todo}
                todos = {todos}
                key = {todo.id}
                setTodos = {setTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided) => (
          <div
            className="todos remove"
            ref = {provided.innerRef} 
            {...provided.droppableProps}
          >
          <span className="todos_heading">Finished</span>
            {compleatedTodos.map((todo, index) => (
              <SingleTodo
                index = {index}
                todo = {todo}
                todos = {compleatedTodos}
                key = {todo.id}
                setTodos = {setCompleatedTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>

  )
}

export default TodoList