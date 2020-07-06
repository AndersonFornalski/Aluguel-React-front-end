import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({input, label, type,className,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
      <label>{label}</label>
      <div className="input-group">
        <input {...input} type={type} className={className} />
        </div>
        {touched &&
          ((error && <div className="alert alert-danger">{error}</div>))}
      
    </div>
  )

const RegisterForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitCb, valid } = props
  return (
    <form  onSubmit={handleSubmit(submitCb)}>
      <div className="form-group">
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            className="form-control"
            component={renderField}
          />
        </div>
      </div>
    
      <div  className="form-group">
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            component={renderField}

          />
        </div>
      </div>

      <div  className="form-group">
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
            component={renderField}

          />
        </div>
      </div>

      <div  className="form-group">
        <label>Confirmation Password</label>
        <div>
          <Field
            name="passwordConfirmation"
            component="input"
            type="password"
            className="form-control"
            component={renderField}

          />
        </div>
      </div>
     
      <div>
        <button className="btn btn-success" type="submit" disabled={!valid || pristine || submitting}>
          Submit
        </button>       
      </div>
    </form>
  )
}

const validate = values => {
    const errors = {}

    if(values.username && values.username.length < 4){
        errors.username = 'Username min length is 4 caracteres';
    }

    if(!values.email){
        errors.email = "Please enter with your email"
    }

    if(!values.passwordConfirmation){
        errors.passwordConfirmation = "Please enter with your Password Confirmation"
    }

    if(values.password !== values.passwordConfirmation){
        errors.password = "Passwords must be the same"
    }
  
    return errors
  }

export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm)