import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Form from './Form'
import FilterButton from './FilterButton'

const initialList = [{
  id: 'todo-1',
  name: 'Tester React',
  completed: true
}, {
  id: 'todo-2',
  name: 'Terminer cette appli',
  completed: true
}, {
  id: 'todo-3',
  name: 'Trouver un stage',
  completed: false
}]

const App = () => {

  const [todoList, setTodoList] = useState(initialList);
  const [filter, setFilter] = useState(null);

  const filterItem = todo => filter === 'completed'
    ? todo.completed
    : filter === 'active'
    ? !todo.completed
    : true
  ;
  
  const leftTodos = todoList.filter(todo => !todo.completed).length

  const handleAdd = (name) => {
    setTodoList([
      {
        id: 'todo-' + Date.now(),
        completed: false,
        name
      },
      ...todoList
    ]);
  }

  // Completed todos
  const handleCheck = (todoId) => {
    setTodoList(
      todoList.map(todo  => todo.id === todoId ? {
        ...todo,
        completed: !todo.completed
      } : todo)
    )
  }

  const handleDestroy = id => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const handleToggleAll = () => {
    setTodoList(todoList.map(todo => ({
      ...todo,
      completed: leftTodos > 0
    })))
  }

  const handleClearCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.completed))
  }

  return <section className="todoapp">
    <header className="header">
      <h1>Todo</h1>
      <Form onAdd={handleAdd} />
    </header>
   
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={leftTodos === 0}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all">Tout compléter</label>
      <ul className="todo-list">

        {todoList.filter(filterItem).map(todo => <TodoItem
          id={todo.id}
          key={todo.id}
          name={todo.name}
          completed={todo.completed}
          onCheck={()=>handleCheck(todo.id)}
          onDestroy={() => handleDestroy(todo.id)}
        />)}
                
      </ul>
    </section>
    
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {leftTodos}
        </strong>
        { leftTodos > 1
          ? ' tâches restantes'
          : ' tâche restante'} 
      </span>
      <ul className="filters">
       <FilterButton
        label = "Tous"
        onClick = {() => setFilter(null)}
        selected = {filter === null}
       />
       <FilterButton
        label = "Complétés"
        onClick = {() => setFilter('completed')}
        selected = {filter === 'completed'}
       />
       <FilterButton
        label = "Actifs"
        onClick = {() => setFilter('active')}
        selected = {filter === 'active'}
       />
        
      </ul>
      <button className="clear-completed" onClick={handleClearCompleted}>
        Effacer les complétés
      </button>
    </footer>
  </section>
}

export default App