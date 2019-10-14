import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { CentrosComercialesBD } from '../../api/centroscomercialesBD.js';
import CentroComercialLocal from "./centrocomerciallocal.js";


class CentroComercialDetail extends Component {

  darlocales(){

    if(this.props.centroComercial.Locales==undefined||this.props.centroComercial.Locales.length==0){

      return <h4>No hay locales asociados.</h4>;

    }
    else{
      return this.props.centroComercial.Locales.map((d,e) => (

        <CentroComercialLocal key={e} value={d} />
      
      ));

    }
    
  }

  render() {
    return (
      <div>
        <div >

<img src={this.props.centroComercial.imagen} className="img-fluid" alt="Institution" width="900" height="500"></img>

<br></br>

<br></br>
<br></br>
<br></br>


</div>
          <h1>
          {this.props.centroComercial.nombre}
          </h1>
          <br></br>

        <h2>
           Locales       
          </h2>
          <br></br>
          <div className="row">
          {this.darlocales()}
          
        </div>
          
          <br></br>

        
        <div className="row">
        <div className="col-6">
          <br></br>
        <h2>
           Ubicación

          </h2>
          <br>
          </br>
          <br>
          </br>
<h6>
{this.props.centroComercial.ubicacion}
</h6>
        </div>
        <div className="col-6">

        <div id="map"></div>
    
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD04yeegjAB3k-Gg7hsyNPPQO-fE002-Ng&callback=initMap">
    </script>


    <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=AIzaSyD04yeegjAB3k-Gg7hsyNPPQO-fE002-Ng" className="img-fluid" alt="Institution" width="900" height="500"></img>

        </div>
        </div>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       
      </div>
    );
  }
}

export default withTracker(() => {
  console.log(window.location.href);
  var m=window.location.href;
var temp2=m.split("/");
var cc=temp2[temp2.length-1];
cc=decodeURIComponent(cc);
  return {
    centroComercial: CentrosComercialesBD.findOne({"nombre":cc})||{"nombre" : "",        "ubicacion" : "",
    "imagen" : ""},
  };
})(CentroComercialDetail);