import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default class CentroComercialCard extends Component  {
    render() 
    {
        return (
          <div className="col-6">
 <div className="w3-card">
            <img src={this.props.value.imagen} alt="CardCentroComercial"  width="400" height="300" />
                
                 <div className="w3-container w3-center" >
              <a href={"centrocomercial/"+this.props.value.nombre} className="btn btn-default"style={{"display":"block","width":"400px"}}>{this.props.value.nombre} </a>
                   
            </div>
          
          </div>
          </div>
          
        );
    }
}

