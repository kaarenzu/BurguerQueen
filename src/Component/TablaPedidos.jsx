import React, {Fragment} from 'react';


class TablaPedidos extends React.Component {
 
render(){
  const {nombre, precio} = this.props.foods;
  console.log(nombre);
  return
  //   <Fragment>
  //   <table className="table table-dark" id="pedidos">
  //     <thead>
  //       <tr>
  //         <th scope="col">Productos</th>
  //         <th scope="col">Precio</th>
  //         <th scope="col">Nombre</th>
  //         <th scope="col">Eliminar</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  // <th scope="col">{nombre}</th>
  //         <th scope="col">
  //           {precio}
  //         </th>
  //         <th scope="col"></th>
  //         <th scope="col"><button className="Eliminar">Eliminar</button></th>
  //       </tr>
  //       <tr>
  //         <th scope="row">Total</th>
  //         <th scope="row">$0</th>
  //         <th scope="row"></th>
  //         <th scope="row"><button className="Enviar">Enviar</button></th>
  //       </tr>
  //     </tbody>
  //   </table>

  // </Fragment>
  
}
}
export default TablaPedidos;