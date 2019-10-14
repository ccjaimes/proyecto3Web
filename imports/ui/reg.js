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
  <div className="row">
    <div className="col-12">
        <div className="col-4">
            <div className="card" hidden></div>
        </div>
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
          <div className="col-4 mx-auto"> 
            <div className="card text-center">
                  <div className="card-body"  style={{backgroundColor: '#FFC49B'}}>
                  <div className="card-title"><h1 className="display-3" style={{textAlign:"center", color:"#001B2E"}}>Registro</h1></div>
                        
                  <Form>
                      <div>
                  <label style={{color:'FFEFD3'}} >Usuario</label>
                  <br></br>
                    <Field name="username" validate={this.validateUsername} placeholder="Usuario" />
                    {errors.username && touched.username && (errors.username!=null) ? <div>{errors.username}</div>: console.log(errors)}
                    </div>
                    <div>
                    <label style={{color:'FFEFD3'}}>Contraseña</label>
                    <br></br>
                    <Field name="password" type="password" validate={this.validatePassword} placeholder="Contraseña"/>
                    {errors.password && touched.password && (errors.password!=null) ? <div>{errors.password}</div>: console.log(errors)}
                    </div>
                    <div>
                    <label style={{color:'FFEFD3'}}>Email</label>
                    <br></br>
                    <Field name="email" validate={this.validateEmail} placeholder="Ej: 123@mail.com"/>
                    {errors.email && touched.email && (errors.email!=null) ? <div>{errors.email}</div>: console.log(errors)}
                    <br></br>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                    </Form>
                    </div>
            </div>
        </div>
      )}
    </Formik>
  </div>
  </div>
)
};
}

export default Reg;