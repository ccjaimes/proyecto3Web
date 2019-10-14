import React, { Component } from 'react';

class Buscar extends Component {

    state= {
        itemsIniciales : [],
        items:[]
    }


    updateSearch(event) {
        this.setState ({search:event.target.value.substr(0,20)});
    }
    
    render() {

        let filtrados = this.props.centrosComerciales.filter(
            (centro) =>{
                return centro.name.toLowerCase().indexOf(this.state.busqueda.toLowerCase()) !=-1;
        }
        );
        


        return (
            <div>
                <ul>
                {filtrados.map((centro)=>
                {
	                    <Centro centro={centro} key={contact.id}></Centro>
                })}
                </ul>

                <input type="text" value={this.state.busqueda} onChange={this.updateSearch.bind(this)}/>
            </div>
        );
    }
}

export default Buscar;