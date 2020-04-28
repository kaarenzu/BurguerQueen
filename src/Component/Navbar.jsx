/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import '../Css/navbar.css';
import Home from './Home.jsx';
import Waiter from './Waiter.jsx';
import Kitchen from './Kitchen.jsx';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      estado: false,
      state: true,

    }
    this.onClickEstado = this.onClickEstado.bind(this);
    this.onClickState = this.onClickState.bind(this);
  }
  onClickState() {
    this.setState({ state: false })
  }
  onClickEstado() {
    if (!this.state.estado) {
      this.setState({ estado: true })
    }
    else if (this.state.estado) {
      this.setState({ estado: false })
    }
    console.log(this.state.estado, 'mi estado')
  }
  render() {

    return (
      <Router>
        <header>
          <div className='menu_bar'>
            <img className='ico_menu'
              onClick={this.onClickEstado}
              src={require("../imagenes/menu.ico")} />
            <img className="ico_logo"
              onClick={this.onClickEstado}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwrFGUW3eAHH7c_izVW_iwr3YiM5sctJojK5Xe1ZgsSVypHKOu&usqp=CAU" />
          </div>
        </header>
        {/* nav movil */}
        {this.state.estado &&
          <nav className="menuMovile">
            <ul>
              <Link to="/" className="text-white " onClick={this.onClickEstado}><li>Home</li></Link>
              <Link to="/cocina" className="text-white " onClick={this.onClickEstado}><li>Cocina</li></Link>
              <Link to="/mesero" className="text-white " onClick={this.onClickEstado}><li>Mesero</li></Link>
            </ul>
          </nav>
        }
        {/* Nav pc */}
        <nav className="menu">
          <ul>
            <Link to="/" className="text-white "><li>Home</li></Link>
            <Link to="/" className="text-white "><li>Cocina</li></Link>
          </ul>
        </nav>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/mesero">
          <Waiter />
        </Route>

        <Route path="/cocina">
          <Kitchen />
        </Route>

      </Router>
    )
  }

}

export default Navbar;