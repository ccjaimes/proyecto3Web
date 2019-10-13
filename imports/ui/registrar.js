import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import { Usuario } from '../api/usuario.js';
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
            str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
          return <Redirect to = {str}/> 
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
        
        Usuario.insert(data);
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
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Registro</Card.Title>
                         <form onSubmit={this.handleSubmit} className="form-group">
                    <div >
                        <label >Nombre Completo</label>
                        <input type="text" id="name" className="form-control" placeholder="Nombre Completo"  ></input>
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña" ></input>
                    </div>
                    <div >
                        <label >Email</label>
                        <input type="text" id="email" className="form-control" placeholder="email"  ></input>
                    </div>
                    <div>
                    <p className="text-center">
                    ¿Ya tienes una cuenta? Ingresa <Link to="/login">aquí</Link>
                  </p>
                       <button onClick = { (event)=>{this.handleSubmit(event)} } className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
                </Card.Body>
                </Card>
                {this.renderProfile()}
                
            </div>
        );
    }
}

export default Registrar;