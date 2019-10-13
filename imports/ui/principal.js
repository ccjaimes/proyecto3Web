import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

//COMPONENTES
import Inicio from "./inicio";
import Tendencia from "./tendencia";

class Principal extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="text-center">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 class="display-1">PINE</h1>
                        </Link>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Inicio></Inicio>
                    </Route>
                    <Route path="/tendencia">
                        <Tendencia></Tendencia>
                    </Route>
                </Switch>

                <footer className="fixed-bottom" style={{ backgroundColor: "#294C60" }}>
                    <div className="row py-3">
                        <div className="col-1 col-md-4">
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="row">
                                <div className="col-4 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link to="/tendencia">
                                        <img src="https://image.flaticon.com/icons/svg/25/25652.svg" style={{ width: "30%" }} alt="Tendencia" />
                                        <br></br>
                                        Tendencia
                                    </Link>
                                </div>
                                <div className="col-4 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link to="/buscar">
                                        <img src="https://image.flaticon.com/icons/svg/25/25313.svg" style={{ width: "30%" }} alt="Buscar" />
                                        <br></br>
                                        Buscar
                                    </Link>
                                </div>
                                <div className="col-4 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link>
                                        <img src="https://image.flaticon.com/icons/svg/149/149763.svg" style={{ width: "30%" }} alt="Recomendado" />
                                        <br></br>
                                        Recomendado
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-md-4">
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default Principal;