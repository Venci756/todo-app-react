import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './TodoApp.css';

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1 >Welcome</h1>
                <div className="container">
                    Welcome to My Todo App {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
            //1. 'this.props.match.params.name' - ja vlece vrednosta na parametarot od rutata /welcome/:name
            //2. Link se importira od React Router i se koristi mesto <a href="#"/> tagot no ne ja refreshuva 
            //celata strana tuku samo komponentata ja loadira na klik 
        )
    }
}
export default WelcomeComponent;