import React, { Component } from 'react';

import CentrosComercialesBD from '../api/centroscomercialesBD';
import LocalBD from '../api/localBD';

class Buscar extends Component {

    state= {
        centrosComerciales:CentrosComercialesBD.find({}).fetch(),
        locales:LocalBD.find({}).fetch(),
        centros:[],
        search:'',
    }


    updateSearch(event) {
        this.setState ({search:event.target.value.substr(0,20)});
    }

    render() {

        let filtrados = this.state.centrosComerciales.filter(
            (centro) =>{
                return centro.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !=-1;
        }
        );
        
        let locales = this.state.locales.filter(
            (local) =>{
                return local.Nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !=-1;
        }
        );


        return (
            <div>
                <h2>Centros Comerciales</h2>
                <br></br>
                <ul>
                {filtrados.map((centro)=>
                {
                    <CentroComercialCard key={centro._id} value={d} />
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
                    <Local key={local._id} value={d} />
                })}
                </ul>

                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
            </div>
        );
    }
}

export default Buscar;