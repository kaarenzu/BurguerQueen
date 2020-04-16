import React, {Fragment} from 'react';
import '../Css/orderBox.css';

class OrderBox extends React.Component {
  render() {
    return (
      <Fragment>
        <table className="table table-dark" id ="pedidos">
  <thead>
    <tr>
      <th scope="col">Productos</th>
      <th scope="col">Precio</th>
      <th scope="col">Eliminar</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"><button className="Eliminar">Eliminar</button></th>
    </tr>
    <tr>
    <th scope="row">Total</th>
    <th scope="row">$200.000</th>
    <th scope="row"><button className="Enviar">Enviar</button></th>
 
    </tr>
  </tbody>
</table>
        
      </Fragment>
    )
  }
}
export default OrderBox;