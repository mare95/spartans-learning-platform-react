import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from './actionCreators';

import './index.css';

class Login extends Component {
    state = {
        username: null,
        password: null
    }

    handleLogin = async () => {
        await this.props.loginCallAction(this.state.username, this.state.password);
        if(this.props.login.isAuthenticated) {
            this.props.history.push('/feed')
        }
    }

    render () {
        return (
            <div className="login-background">
                <div className="login-wrapper">
                    <div className="login-image"></div>
                    <div className="login-form-wrapper">
                        <input 
                            onKeyUp={(e) => {this.setState({username:e.target.value})}} 
                            className="login-input" 
                            type="email" 
                            placeholder="Email" 
                        /> <br />
                        <input 
                            onKeyUp={(e) => {this.setState({password:e.target.value})}} 
                            className="login-input" 
                            type="password"
                            placeholder="Password" 
                        /> <br />
                        <button className="btn-login" type="button" onClick={() => this.handleLogin()}>Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginCallAction: (username, password) => dispatch(actions.login(username, password))
  });
  
const mapStateToProps = state => {
    return {
        login: state.auth.login
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);