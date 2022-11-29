import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import InputFeild from './compornents/InputFeild';
import TodoList from './compornents/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [compleatedTodos, setCompleatedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className='App'>
        <span className="heading">Work Hard</span>
        <InputFeild todo = { todo } setTodo = { setTodo } handleAdd = { handleAdd }/>
        <TodoList 
          todos = { todos }
          setTodos = { setTodos }
          compleatedTodos = {compleatedTodos} 
          setCompleatedTodos = {setCompleatedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
