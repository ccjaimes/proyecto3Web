import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import {Redirect} from 'react-router-dom';

import { Usuario } from '../api/usuario.js';
 
class Usuario extends Component {

    constructor(){
        super();
        this.state={

        }
    }

  logOut=()=>{
      sessionStorage.setItem("Usuario", null)
      return <Redirect to="/home"></Redirect>
  }  

  render() {
    return (
      <div>
          <div className="card">
          
            <div className="card-img" variant="top" src="holder.js/100px180" />
                <div className="card-body">
                    <div className="card-title">Nombre Usuario</div>
                    <img src="" className="rounded-circle" alt="Foto de perfil"></img>
                    <button variant="primary" onClick={this.logOut()}>Log Out</button>
                </div>
          </div>
      </div>
    );
  }
}

export default Usuario;