
import React from 'react';

function TodoItem({ item, index, toggleComplete }) {
    return (
        <div className="col-12 my-2" onClick={() => toggleComplete(index)} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
        </div>
    );
}

export default TodoItem;

