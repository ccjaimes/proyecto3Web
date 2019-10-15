import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import  Local  from '../api/localBD.js';
import style from './style.css'
 
class Locales extends Component {

  img(){
    var img=["https://image.shutterstock.com/image-vector/grocery-store-front-260nw-1010453878.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDNY4Pw3ulrWXo5zNxkx0j7AiQDtDkmPHD0fu8smzTpKGsWB6",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlYF2f7-B0nr6DUtrnJq4RoHchOraILE9vV1MkRK2Y0UnDNFr",
  "https://cdn.pixabay.com/photo/2017/08/31/12/44/awning-2700634__340.png",
"https://cdn4.iconfinder.com/data/icons/shopping-113/24/store_local_shop_building-512.png"];

    return img[Math.floor(Math.random() * img.length)];
  }

  renderLocales() {
  
    return this.props.locales.map((d) => (
        
    
<div key={d._id} className="card bg-light mb-4 mt-4"   >
      <div className="row ">
          <div className="col-5">
            <img src=  {this.img()} className="card-img" alt="Imagen local"/>
          </div>
          <div className="col-md-7 ">
             <h4 className="card-title mt-2 text-center" >{d.Nombre}</h4>
            <h5>Productos:</h5>
            {d.Productos.map((product) => {
              return (
                <li>
                <a href="#"key={product.name}>{product.name}</a>
                </li>
              );
            })}          
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
          <h1 id="titulo1">Locales</h1>      
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