import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UsuarioBD } from '../api/usuarioBD.js';
import style from './style.css'

class Registrar extends Component {

    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            name:'',
            redirect:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        var data = {usuario:document.getElementById("name").value,password:document.getElementById("password").value,correo:document.getElementById("email").value, rol:"CLIENTE"}
        
        UsuarioBD.insert(data);
        sessionStorage.setItem("Usuario",data.usuario);
        if(sessionStorage.getItem("Usuario") != null){
            this.setState({
                redirect:true
            });
        }
    }


    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Registro</div>
                         <form onSubmit={this.handleSubmit} className="form-group">
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
                        <input type="text" id="email" className="form-control" placeholder="email" required />
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