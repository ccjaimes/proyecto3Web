import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UsuarioBD } from '../api/usuarioBD.js';
import style from './style.css'

const txtFieldState = {
    value: "",
    valid: true,
    typeMismatch: false,
    errMsg: "" //this is where our error message gets across
};

class Registrar extends Component {

    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            name:'',
            redirect:false,
            email1: { ...txtFieldState, fieldName: "email1", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format" },
            name1: { ...txtFieldState, fieldName: "name1", required: true, requiredTxt: "First Name is required" },
            password1: { ...txtFieldState, fieldName: "password1", required: false, requiredTxt: "Last Name is required" },
            allFieldsValid: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    ErrorValidationLabel = ({ txtLbl }) => (
        <label htmlFor="" style={{ color: "red" }}>
            {txtLbl}
        </label>
    );

  //we need to extract specific properties in Constraint Validation API using this code snippet
reduceFormValues = formElements => {
    const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element
//we need to extract specific properties in Constraint Validation API using this code snippet
    const formValues = arrElements
        .filter(elem => elem.name.length > 0)
        .map(x => {
            const { typeMismatch } = x.validity;
            const { name, type, value } = x;
return {
                name,
                type,
                typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
                value,
                valid: x.checkValidity()
            };
        })
        .reduce((acc, currVal) => { //then we finally use reduce, ready to put it in our state
            const { value, valid, typeMismatch } = currVal;
            const {
                fieldName,
                requiredTxt,
                formatErrorTxt
            } = this.state[currVal.name]; //get the rest of properties inside the state object
//we'll need to map these properties back to state so we use reducer...
            acc[currVal.name] = {
                value,
                valid,
                typeMismatch,
                fieldName,
                requiredTxt,
                formatErrorTxt
            };
return acc;
        }, {});
return formValues;
}
checkAllFieldsValid = (formValues) => {
    return !Object.keys(formValues)
        .map(x => formValues[x])
        .some(field => !field.valid);
};
   renderLogin = () => { 
        
          return <Redirect to = '/login' /> 
        
    }
    renderProfile = () => { 
        if (this.state.redirect) { 
          var str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
          return <Redirect to ='/usuario'/> 
        } 
    }  
    handleChange=(e)=>{
        let target = e.target;

        let value = target.type === 'checkbox' ? target.checked:target.value;

        let name = target.name;

        this.setState({
            [name]:value 
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        const form = e.target;
        const formValues = this.reduceFormValues(form.elements);
        const allFieldsValid = this.checkAllFieldsValid(formValues);
        var data = {usuario:document.getElementById("name1").value,password:document.getElementById("password1").value,correo:document.getElementById("email1").value, rol:document.getElementsByName("tipo").value}
        
        UsuarioBD.insert(data);
        sessionStorage.setItem("Usuario",data.usuario);
        if(sessionStorage.getItem("Usuario") != null){
            this.setState({
                redirect:true
            });
        }
        this.setState({ ...formValues, allFieldsValid });

    }


    render() {

        const { email1, name1, password1, allFieldsValid } = this.state;
        const successFormDisplay = allFieldsValid ? "block" : "none";
        const inputFormDisplay = !allFieldsValid ? "block" : "none";

        const renderEmailValidationError = email1.valid ?  "" : <ErrorValidationLabel txtLbl={email1.typeMismatch ? email1.formatErrorTxt : email1.requiredTxt} />;
        const renderNameValidationError = name1.valid ? "" : <ErrorValidationLabel txtLbl={name1.requiredTxt} />;
        const renderPasswordValidationError = password1.valid ? "" : <ErrorValidationLabel txtLbl={password1.requiredTxt} />;
        return (
            <div>
                
                <div className="card">
                    <div className="card-body">
                        <div className="card-title"><h1 className="display-3" style={{textAlign:"center"}}>Registro</h1></div>
                            {renderNameValidationError}
                         <form onSubmit={this.handleSubmit} className="form-group" noValidate>
                    <div >
                        <label >Nombre Completo</label>
                        {renderNameValidationError}
                        <input type="text" id="name1" className="form-control" placeholder="Nombre Completo" required />
                    </div>
                    <div >
                        <label >Contraseña</label>
                        {renderPasswordValidationError}
                        <input type="password" id="password1" className="form-control" placeholder="Ingresa tu contraseña"  required />
                    </div>
                    <div >
                        <label >Email</label>
                        {renderEmailValidationError}
                        <input type="email" id="email1" className="form-control" placeholder="email" required />
                    </div>
                    <div>
                        <label>Tipo de Usuario</label>
                        <select name="tipo">
                            <option value="Cliente">Cliente</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </div>
                    <div>
                    <p className="text-center">
                    ¿Ya tienes una cuenta? Ingresa <Link to="/login">aquí</Link>
                  </p>
                  <input type="submit" value="Submit" /> </div>
                </form>
                </div>
                </div>
                {this.renderProfile()}
                
            </div>
        );
    }
}

export default Registrar;