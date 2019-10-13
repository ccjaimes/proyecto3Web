import React, { Component } from 'react';
import Usuario from '../api/usuario.js';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            mostrar : false
        }

    }
    renderProfile = () => { 
        if (this.state.redirect) { 
          var str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
          return <Redirect to = {str}/> 
        } 
    }  


    autentication=(event)=> {
        event.preventDefault();

        let user={usuario:document.getElementById("user").value ,password: document.getElementById("passwordUser").value };

        if(user.password === Usuario.findOne({usuario:user.usuario}).password){
            sessionStorage.setItem("Usuario", user.usuario);
        }
        this.setState({
            mostrar : true
        })

    }



    render() {
        return (
            <div>
                <div className="card .col-centered">
                    <div className="card-body">
                        <div className="card-title">Login</div>
                         <form onSubmit={this.handleSubmit} className="form-group">
                    <div>
                        <label>User</label>
                        <input type="text" id="user" className="form-control" placeholder="Nombre Completo"  ></input>
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña" ></input>
                    </div>
                    <div >
                       <button onClick = { (event)=>{this.autentication(event)} } className="btn btn-primary">Registrarse</button>
                    </div>
                </form>
                </div>
                </div>
                {this.renderProfile()}
            </div>
        );
    }
}

export default Login;