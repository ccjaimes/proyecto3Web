import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import { Usuario } from '../api/usuario.js';
 
class Usuario extends Component {

  render() {
    return (
      <div>
          <div className="">
          <Card className ="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Nombre Usuario</Card.Title>
                    <img src="" className="rounded-circle" alt="Foto de perfil"></img>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </div>
      </div>
    );
  }
}

export default Usuario;