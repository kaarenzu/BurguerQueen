import React, { Fragment } from 'react';
import '../Css/orderBox.css';

class OrderBox extends React.Component {
  // pedidos() {
  //   db.collection('pedidos').add({
  //     name:this.state.name,
  //     datatime: new Date(),
  //   })
  //     .then((postNew) => {
  //       const collecionPost = db.collection('post');
  //       const collecionPostOrdenada = collecionPost.orderBy('datatime', 'desc');
  //       collecionPostOrdenada.get().then((element) => {
  //         const postNew = element.docs.map(doc => doc.data());
  //         console.log(postNew, 'postNew')
  //         this.setState({
  //           mensaje: [],
  //           mostrarPost: postNew,
  //           name: user.displayName
  //         })
  //         this.textAreaPost.current.value = ""
  //       })
  //     })
  //       .catch((error) => {
  //         console.error('Error adding document: ', error);
  //     });
  // }
  render() {
    return (
      <Fragment>
        <table className="table table-dark" id="pedidos">
          <thead>
            <tr>
              <th scope="col">Productos</th>
              <th scope="col">Precio</th>
              <th scope="col">Nombre</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"><button className="Eliminar">Eliminar</button></th>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <th scope="row">$0</th>
              <th scope="row"></th>
              <th scope="row"><button className="Enviar">Enviar</button></th>
            </tr>
          </tbody>
        </table>

      </Fragment>
    )
  }
}
export default OrderBox;