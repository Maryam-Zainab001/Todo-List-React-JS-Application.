
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TodoList from './Components/TodoList';
function App() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-danger text-white">
                        <div className="col  p-2">
                            <h4 className="text-center">Todo App </h4>
                        </div>
                    </div>
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default App;

