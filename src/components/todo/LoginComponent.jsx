import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    state = {
        username: "Venko",
        password: '',
        hasLoginFailed: false,
        showSuccessfulMessage: false
    }

    handleChange = (event) => {
        //console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = () => {
        if (this.state.username === 'Venko' && this.state.password === '123') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({ showSuccessfulMessage: true })
            // this.setState({ hasLoginFailed: false })

        } else {
            this.setState({ showSuccessfulMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvaldLoginCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {/* <ShowLoginSuccessMessage showSuccessfulMessage={this.state.showSuccessfulMessage}></ShowLoginSuccessMessage> */}
                    {this.state.showSuccessfulMessage && <div >Login successful</div>}
                    User Name :<input type="text" value={this.state.username} name="username" onChange={this.handleChange}></input>
                    Password : <input type="password" value={this.state.password} name="password" onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>

        )
    }
    // function ShowInvaldLoginCredentials(props) {
    //     if (props.hasLoginFailed) {
    //         return <div >Invalid credentials</div>
    //     }
    //     return null;
    // }

    // function ShowLoginSuccessMessage(props) {
    //     if (props.showSuccessfulMessage) {
    //         return <div >Login successful</div>
    //     }
    //     return null;
    // }
}
export default LoginComponent;