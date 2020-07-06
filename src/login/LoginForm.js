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

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitCb, valid } = props
  return (
    <form  onSubmit={handleSubmit(submitCb)}>
    
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
     
      <div>
        <button className="btn btn-success" type="submit" disabled={!valid || pristine || submitting}>
          Logar
        </button>       
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'loginForm',  
})(LoginForm)