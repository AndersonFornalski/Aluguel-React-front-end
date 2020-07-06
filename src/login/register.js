import React from 'react';
import RegisterForm from './RegisterForm';

import * as actions from '../actions';



 export class Register extends React.Component{ 

    registerUser(userData){
        console.log(userData);
        actions.register(userData).then(
            (registered) =>{
                
            },
            (errors)=>{
                
            }
        )
    }

    render(){
        return(
            <section id="register">
                <div className="Form">
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="page-title">Register</h1>
                                <RegisterForm submitCb={this.registerUser}/>
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