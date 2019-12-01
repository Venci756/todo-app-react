import React, { Component } from 'react';
import './TodoApp.css';
class ListTodosComponent extends Component {
    state = {
        todos: [
            { id: 1, description: 'First Todo Description', done: false, date: new Date() },
            { id: 2, description: 'Second Todo Description', done: false, date: new Date() },
            { id: 3, description: 'Third Todo Description', done: false, date: new Date() },
            { id: 4, description: 'Fourth Todo Description', done: false, date: new Date() },
            { id: 5, description: 'Fifth Todo Description', done: false, date: new Date() },
        ]
    }
    render() {
        return (
            <div>
                <h1>Todo Lists</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th >Description</th>
                                <th >Is it completed?</th>
                                <th >Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(element =>
                                    <tr key={element.id}>
                                        <td >{element.description}</td>
                                        <td >{element.done.toString()}</td>
                                        <td >{element.date.toString()}</td>
                                        {/* 
                                        We cannot put objects as childs in JSX we have to call .toString() on them 
                                        */}
                                    </tr>
                                    // in JSX file we don't have to put {} for the return block in arrow functions
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListTodosComponent;
