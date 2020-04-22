import React, { Fragment } from 'react';
import '../Css/orderBox.css';
import PropTypes from 'prop-types';
// import TablaPedidos from './TablaPedidos';
// 1.- Inyectar componente OrderBox
// 2.- Pasarle al componente OrderBox el arreglo this.state.newArray como prop
// 3.- En el componente OrderBox hacer un console.log de this.props para 
// asegurarnos que estamos recibiendo la data que queríamos recibir
// 4.- Hacer el map de esa data en el componente OrderBox
// <OrderBox foods={this.state.newArray} />


class OrderBox extends React.Component {


  render() {
    return (
      <Fragment>
        <table className="table table-dark" id="pedidos">
          <thead>
            <tr>
              <th scope="col">Productos</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.foods.map((item) => (
              <Fragment>
                <tr>
                  <th scope="col">{item.nombre}</th>
                  <th scope="col">{item.precio}</th>
                  <th scope="col"></th>
                  <th scope="col"><button className="Eliminar">Eliminar</button></th>
                </tr>
              </Fragment>
            ))}
            <tr>
              <th scope="row">Total</th>
              <th scope="row">{}</th>
              <th scope="row"></th>
              <th scope="row"><button className="Enviar">Enviar</button></th>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )


  }
}
OrderBox.propTypes = {
  foods: PropTypes.array.isRequired
}
export default OrderBox;