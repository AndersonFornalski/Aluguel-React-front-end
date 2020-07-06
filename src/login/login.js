import React from 'react';  
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import * as actions from '../actions';

 class Login extends React.Component{ 

    constructor(){
        super();

        this.loginUser = this.loginUser.bind(this);
    }



    loginUser(userData){
        this.props.dispatch(actions.login(userData));
        console.log(userData)
    }


    render(){
        return(
            <section id="login">
                <div className="Form">
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="page-title">Login</h1>
                            <LoginForm submitCb={this.loginUser}/>
                            </div>       
                                <div className="col-md-6 ml-auto"> 
                                    <div className="image-container">
                                    <h2 className="catchphrase">Hundreds anwome places in reach of few clicks.</h2>
                                    <img src=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


function mapStateToProps(state){
    return{
        auth: state.auth.data
    }
}

export default connect(mapStateToProps)(Login)