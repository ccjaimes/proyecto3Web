import React, { Component } from 'react';

class Principal extends Component 
{
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="text-center">
                        <h1 class="display-1">PINE</h1>
                    </div>
                </div>
                <footer className="fixed-bottom" style={{backgroundColor:"red"}}>
                <div className="row py-3">
                    <div className="col-5">
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <div className="col-4 text-center" style={{filter:"invert(100%)"}}>
                                <img src="https://image.flaticon.com/icons/svg/25/25652.svg" style={{width:"80%"}} alt="Tendencia"/>
                                <br></br>
                                Tendencia
                            </div>
                            <div className="col-4 text-center" style={{filter:"invert(100%)"}}>
                                <img src="https://image.flaticon.com/icons/svg/25/25313.svg" style={{width:"80%"}} alt="Buscar"/>
                                <br></br>
                                Buscar
                            </div>
                            <div className="col-4 text-center" style={{filter:"invert(100%)"}}>
                                <img src="https://image.flaticon.com/icons/svg/149/149763.svg" style={{width:"80%"}} alt="Recomendado"/>
                                <br></br>
                                Recomendado
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                    </div>
                </div>
            </footer>
            </React.Fragment>
        );
    }
}

export default Principal;