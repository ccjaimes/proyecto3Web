import React, { Component } from 'react';

class Inicio extends Component {
    render() {
        return (
            <div class="container-fluid" style={{minHeight:"100vh"}}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="rounded-circle img-fluid mx-auto my-auto d-block" src="https://raw.githubusercontent.com/ccjaimes/proyecto3Web/master/img/discount.gif" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Te presentamos PINE discounts! Una aplicación que te permitirá ahorrar cuando estes en un centro comercial. Cuando quieras encontrar descuentos, puedes encontrar categorías como ropa, comida o tecnología. Tambien puedes filtrar ofertas por tus sitios favoritos y los productos que más quieras adquirir!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;