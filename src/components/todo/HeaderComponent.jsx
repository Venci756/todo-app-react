import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TodoApp.css';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    {isUserLoggedIn && <div><a href="https://github.com/Venci756" className="navbar-brand">My Todo App</a></div>}
                    {isUserLoggedIn && <div><a href="http://www.youtube.com" className="navbar-brand">Youtube</a></div>}
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/welcome/Venko">Home</Link></li>
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(HeaderComponent);