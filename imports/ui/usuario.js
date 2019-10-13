import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import {Redirect} from 'react-router-dom';

import { UsuarioBD } from '../api/usuarioBD';
 
class Usuario extends Component {

    constructor(){
        super();
        var data = UsuarioBD.findOne({usuario:sessionStorage.getItem("Usuario")})
        this.state={
            usuario: data.usuario,
            correo: data.correo,
            rol:data.rol
        }
    }

  logOut =()=>{
      sessionStorage.setItem("Usuario", null)
      return <Redirect to="/tendencia"></Redirect>
  }  

  insertarDatos =()=>{

    var dato = sessionStorage.getItem("Usuario")

      this.setState({
          usuario:dato.usuario,
          correo:dato.correo,
          rol:dato.rol
      })
  }

  render() {
    return (
      <div>
          <div className="card">
          
            <div className="card-img" variant="top" src="holder.js/100px180" />
                <div className="card-body">
                    <div className="card-title">{this.state.usuario}</div>
                    <img src="" className="rounded-circle" alt="Foto de perfil"></img>
                    <button variant="primary" onClick={(event)=>this.logOut(event)}>Log Out</button>
                </div>
          </div>
      </div>
    );
  }
}

export default Usuario;