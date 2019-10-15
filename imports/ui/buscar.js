import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import LocalCard from './localcard';
import CentroComercialCard from './centroComercial/centrocomercialcard';
import CentrosComercialesBD  from '../api/centroscomercialesBD';
import LocalBD from '../api/localBD';

class Buscar extends Component {
    constructor(props){
        super(props);
        console.log(this.props.locales)
    this.state= {
       
        centros:[],
        search:'',
    }

   // this.componentDidMount = this.componentDidMount.bind(this);
    
}


    updateSearch(event) {
        this.setState ({search:event.target.value.substr(0,20)});
    }

    
     
    filterList = (event) => {
            let items = this.state.centrosComerciales;
            items = items.filter((item) => {
              return item.nombre.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
            });
            this.setState({centros: items})
    }
          

    render() {

        console.log(this.props.centrosComerciales)
        let filtrados = this.props.centrosComerciales.filter(
            (centro) =>{
                return centro.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
        }
        );
        console.log(filtrados)
        let locales = this.props.locales.filter(
            (local) =>{
                return local.Nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
        }
        );


        return (
            <div>
                <div className="md-form mt-0">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={(this.updateSearch.bind(this))}/>
                 </div>
                  <hr></hr>
                <h2>Centros Comerciales</h2>
                <br></br>
                <ul>
                {filtrados.map((centro)=>
                {
                   return <CentroComercialCard key={centro._id} value={centro} />
                })}
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>Locales</h2>
                <br></br>
                <ul>
                {locales.map((local)=>
                {
                   return <LocalCard key={local._id} value={local} />
                })}
                </ul>

              
            </div>
        );
    }
}

export default withTracker(() => {
    console.log(CentrosComercialesBD.find({}).fetch());
    return {
      centrosComerciales: CentrosComercialesBD.find({}).fetch(),
      locales: LocalBD.find({}).fetch()
      
    };
  })(Buscar);