import React, { useState } from 'react'

function Todo({ todo, index, removeTodo }) {
    return (
        <div className='todo'>
            {todo.text}
            <button onClick={() => removeTodo(index)}> x </button>
        </div>
    )
}

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='input' value={value} placeholder='add todos..' onChange={e => setValue(e.target.value)} />
        </form>
    )
}

function TodoList() {
    const [todos, setTodos] = useState([
        {
            text: 'learn React',
            isCompleted: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className='app'>
            <div className='todo-list'>
                {todos.map((todo, index) =>
                    <Todo key={index} index={index} todo={todo} removeTodo={removeTodo}></Todo>
                )}
                <TodoForm addTodo={addTodo}></TodoForm>
            </div>
        </div>
    )
}

export default TodoList