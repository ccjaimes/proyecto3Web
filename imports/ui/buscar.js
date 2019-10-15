import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import LocalCard from './localcard';
import CentroComercialCard from './centroComercial/centrocomercialcard';
import CentrosComercialesBD from '../api/centroscomercialesBD';
import "./css/style.css";
import LocalBD from '../api/localBD';

class Buscar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            centros: [],
            search: '',
        }

        // this.componentDidMount = this.componentDidMount.bind(this);

    }


    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }



    filterList = (event) => {
        let items = this.state.centrosComerciales;
        items = items.filter((item) => {
            return item.nombre.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ centros: items })
    }


    render() {
        let filtrados = this.props.centrosComerciales.filter(
            (centro) => {
                return centro.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        let locales = this.props.locales.filter(
            (local) => {
                return local.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
                <div className="md-form mt-0">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={(this.updateSearch.bind(this))} />
                </div>
                <hr></hr>
                <h2>Centros Comerciales</h2>
                <br></br>
                <div className="scro">
                    {filtrados.map((centro) => {
                        return <div className="col-6"><CentroComercialCard key={centro._id} value={centro} /></div>
                    })}
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>Locales</h2>
                <br></br>
                <ul>
                <div className="row">
                    {locales.map((local) => {
                        return <div className="col-6"><LocalCard key={local._id} value={local} /></div>
                    })}
                    </div>
                </ul>


            </div>
        );
    }
}

export default withTracker(() => {
    console.log(LocalBD.find({}).fetch());
    return {
        centrosComerciales: CentrosComercialesBD.find({}).fetch(),
        locales: LocalBD.find({}).fetch()
    };
})(Buscar);