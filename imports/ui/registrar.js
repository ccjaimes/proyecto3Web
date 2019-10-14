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
            email1: { ...txtFieldState, fieldName: "Email", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format" },
        name1: { ...txtFieldState, fieldName: "First Name", required: true, requiredTxt: "First Name is required" },
        password: { ...txtFieldState, fieldName: "Last Name", required: false, requiredTxt: "Last Name is required" },
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

    reduceFormValues = formElements => {
        const arrElements = Array.prototype.slice.call(formElements);

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
        var data = {usuario:document.getElementById("name").value,password:document.getElementById("password").value,correo:document.getElementById("email").value, rol:document.getElementsByName("tipo").value}
        
        UsuarioBD.insert(data);
        sessionStorage.setItem("Usuario",data.usuario);
        if(sessionStorage.getItem("Usuario") != null){
            this.setState({
                redirect:true
            });
        }
    }


    render() {

        const { email, firstname, lastname, allFieldsValid } = this.state;
        const renderEmailValidationError = email.valid ?  "" : <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt} />;
        const renderDateValidationError = lastname.valid ? "" : <ErrorValidationLabel txtLbl={lastname.requiredTxt} />;
        const renderFnameValidationError = firstname.valid ? "" : <ErrorValidationLabel txtLbl={firstname.requiredTxt} />;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title"><h1 className="display-3">Registro</h1></div>
                         <form onSubmit={this.handleSubmit} className="form-group" noValidate>
                    <div >
                        <label >Nombre Completo</label>
                        <input type="text" id="name" className="form-control" placeholder="Nombre Completo" required />
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña"  required />
                    </div>
                    <div >
                        <label >Email</label>
                        <input type="email" id="email" className="form-control" placeholder="email" required />
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
                       <button onClick = { (event)=>{this.handleSubmit(event)} } className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
                </div>
                </div>
                {this.renderProfile()}
                
            </div>
        );
    }
}

export default Registrar;