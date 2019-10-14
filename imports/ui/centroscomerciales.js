import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { CentrosComercialesBD } from '../api/centroscomercialesBD.js';
import CentroComercialCard from "./centrocomercialcard.js";
 import "./css/style.css";
class CentrosComerciales extends Component {

  renderCentroComercial() {
    return this.props.centrosComerciales.map((d) => (
      <CentroComercialCard key={d._id} value={d} />
    ));
  }

  render() {
    return (
      <div>
        <div >
          <h2>
            Centros Comerciales        
          </h2>
        </div>
        <div class="scro">
       
          {this.renderCentroComercial()}
          
          </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    centrosComerciales: CentrosComercialesBD.find({}).fetch(),
  };
})(CentrosComerciales);