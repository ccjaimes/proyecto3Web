import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Local } from '../api/localBD.js';
import style from './style.css'
 
class Locales extends Component {

  renderLocales() {
  
    return this.props.locales.map((d) => (
        
      <div key={d._id} className="card bg-light mb-4 mt-4"   >
      <div className="row ">
          <div className="col">
            <img src="data:image/png;base64,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" className="card-img" alt="..."/>
          </div>
          <div className="col-md-8 ">
             <h5 className="card-title mt-2">{d.name}</h5>
             <p className="card-text  ">This is a wider card with </p>
           </div>    
      </div>      
</div>

    ));
  }

  
  render() {
    return (
      <div>
        <div className="row">
          <div className="titulo mt-4">
           <h1>Locales</h1>      
          </div>
        </div>
        <div className="row">
          {this.renderLocales()}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    locales: Local.find({}).fetch(),
  };

})(Locales);