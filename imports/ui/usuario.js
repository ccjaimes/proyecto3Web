import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import {Redirect} from 'react-router-dom';
import UsuarioBD from '../api/usuarioBD';
import { isNull } from "util";
 
class Usuario extends Component {

    constructor(){
        super();
        var data = UsuarioBD.findOne({usuario:sessionStorage.getItem("Usuario")})
        this.state={
            usuario: data != undefined ? data.usuario:null,
            correo: data != undefined ? data.correo:null,
            rol:data != undefined ? data.rol:null
        }
    }

  logOut =(event)=>{
      event.preventDefault();
      sessionStorage.setItem("Usuario", null);
      sessionStorage.clear();
      return <Redirect to="/"></Redirect>
  }  

  
  renderSalida=()=>{
    if(sessionStorage.getItem("Usuario")==null){
      
      return <Redirect to="/"/>
    }

  }

  insertarDatos =()=>{

    var dato = sessionStorage.getItem("Usuario")

      this.setState({
          usuario:dato.usuario,
          correo:dato.correo,
          rol:dato.rol
      })
  }

  log(){
    if(this.state.usuario ==null){
      return true
    }
    return false
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
      <div hidden={this.log()} className="col-4 mx-auto" >
          <div className="card">
          
            <div className="card-body">
                    <div className="card-title">{this.state.usuario}</div>
                    <img src="https://image.flaticon.com/icons/svg/483/483361.svg" className="rounded-circle" alt="Foto de perfil"></img>
                    <button className="btn btn-danger" onClick={(event)=>this.logOut(event)}>Log Out</button>
                </div>
          </div>
          {this.renderSalida()}
      </div>
      <div hidden={!this.log()}>
      <div className="card">
          
          <div className="card-img" variant="top" src="https://image.flaticon.com/icons/svg/1510/1510317.svg" />
              <div className="card-body">
                  <div className="card-title">Ops! Pagina no encontrada</div>
                  <button className="btn btn-primary" onClick={this.renderSalida}>Volver a la pagina principal</button>
              </div>
        </div>
      </div>
      {this.renderSalida()}
      </div>
     
      </div>
    );
  }
}

export default Usuario;