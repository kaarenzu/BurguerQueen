/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import '../Css/home.css';
import Waiter from './Waiter.jsx';
import Kitchen from './Kitchen.jsx';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      state: false,
      secondState: true
    }
    this.onClickMesero = this.onClickMesero.bind(this);
    this.onClickCocina = this.onClickCocina.bind(this);
  }
  // Cambia el estado del componente con el botón cocina
  onClickCocina() {
    this.setState({ secondState: true, state: true })
  }
  // Cambia el estado del componente con el botón mesero
  onClickMesero() {
    this.setState({ secondState: false })
  }

  render() {
    // Sólo si cumple estas condiciones muestra esto
    if (!this.state.state === this.state.secondState) {
      return (
        <div className="containerHome">
          <div className="home">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwrFGUW3eAHH7c_izVW_iwr3YiM5sctJojK5Xe1ZgsSVypHKOu&usqp=CAU" />
            <div className="botones">
              <button className="btn btn-success btn-lg" id="btn" onClick={this.onClickCocina} >Cocina</button>
              <button className="btn btn-danger btn-lg" id="btn" onClick={this.onClickMesero}>Mesero</button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <Fragment>
        {this.state.secondState ? <Kitchen /> : <Waiter />}
      </Fragment>
    )
  }
}
export default Home;