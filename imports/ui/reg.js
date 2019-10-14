import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UsuarioBD from '../api/usuarioBD';

class Reg extends Component {



validateEmail(value) {
  let error;
  if (!value) {
    error = 'Este campo es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Direccion de correo erroneo';
  }
  return error;
}

 validateUsername(value) {
  let error;
  if(!value){
    error = 'Este campo es obligatorio';
  }
  else if (value === UsuarioBD.findOne({usuario:value})) {
    error = 'Lo sentimos, ese nombre de usuario ya esta en uso';
  }
  return error;
}

validatePassword(value){
    let error;
    if(!value){
        error = 'Este campo es obligatorio';
    }
    else if(value.min(5)){
        error = 'Contraseña muy corta, prueba con otra';
    }
    return error;
   
}

render() {
    return (
  <div>
    
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        
      }}
    >
      {({ errors, touched, isValidating }) => (
          <div>
            <div className="card text-center">
                  <div className="card-body">
                  <div className="card-title"><h1 className="display-3" style={{textAlign:"center"}}>Registro</h1></div>
                        
                  <Form>
                  <label >Usuario</label>
                    <Field name="username" validate={this.validateUsername} />
                    <ErrorMessage component="span" name="username" />
                    <label >Contraseña</label>
                    <Field name="password" type="password" validate={this.validatePassword} />
                    <ErrorMessage component="span" name="password" />
                    <label >Email</label>
                    <Field name="email" validate={this.validateEmail} />
                    <ErrorMessage component="span" name="email" />
                    <button type="submit">Submit</button>
                    </Form>
                    </div>
            </div>
        </div>
      )}
    </Formik>
  </div>
)
};
}

export default Reg;