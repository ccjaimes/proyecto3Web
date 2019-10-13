import React, { Component } from 'react';
import Usuario from '../api/usuario.js';

class Login extends Component {

    constructor(){
        this.state = {
            mostrar : false
        }

    }
    renderProfile = () => { 
        if (this.state.redirect) { 
            str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
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
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
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
                </Card.Body>
                </Card>
                {this.renderProfile()}
            </div>
        );
    }
}

export default Login;