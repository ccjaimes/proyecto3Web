import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { DescuentoBD } from '../api/descuentoBD';

class Descuento extends Component {
    render() 
    {
        return (
            <div className="card img-fluid">
                <img className="card-img-top" src={'../../img/detailDesc'+this.props.desc.categoria} alt="CardBackground" style={{ width: "100%" }} />
                <div className="card-img-overlay">
                    <div className="row">
                        <h4 className="card-title">{this.props.desc.porcentaje}</h4>
                        <p className="card-text">{this.props.desc.descripcion}</p>
                        <a href="#" class="btn btn-info">Learn</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Descuento;