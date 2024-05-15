
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const getLocalItem = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function TodoList() {
    const [text, setText] = useState('add some task');
    const [task, setTask] = useState(getLocalItem());

    const changeText = (e) => {
        setText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTask([...task, { text: text, completed: false }]);
        setText('');
    };

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(task));
    }, [task]);

    const toggleComplete = (index) => {
        const updatedTasks = [...task];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTask(updatedTasks);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="row justify-content-between text-white p-2">
                    <div className="form-group flex-fill mb-2 col-9">
                        <input id="todo-input" type="text" className="form-control" value={text} onChange={changeText} />
                    </div>
                    <button type="submit" className="btn btn-success mb-2 ml-2 col-3">
                        Add todo
                    </button>
                </div>
            </form>

            <div className="container">
                <div className="row">
                    {task.map((item, index) => (
                        <TodoItem key={index} item={item} index={index} toggleComplete={toggleComplete} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;


