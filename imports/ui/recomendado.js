import React, { Component } from 'react';
import UsuarioBD from '../api/usuarioBD';
import DescuentoList from './descuento/descuentoList';

class Recomendado extends Component {
    validarUsuario(){
        if(sessionStorage.getItem("Usuario"))
        {
            let categoria = UsuarioBD.find({usuario: sessionStorage.getItem("Usuario")}).fetch()[0].categoriaFavorita;
            return <DescuentoList categoria={parseInt(categoria)}/>
        }
        else
        {
            return <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Oops! parece que no has ingresado como usuario</h5>
                    <p className="card-text">Te invitamos a ingresar con tus credenciales, o registrarte si no lo has hecho!</p>
                    <a href="/registrar" class="btn btn-primary">Ingresa aquí!</a>
                </div>
            </div>
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.validarUsuario()}
            </React.Fragment>
        );
    }
}

export default Recomendado;