import React, { Fragment } from 'react';
import { db } from './ConfigFirebase.jsx'
// Componente que guarda la el nombre de usuario en db 
class InputOrder extends React.Component {
  constructor() {
    super();
    this.inputName = React.createRef()
    this.state = {
      name: [],
      mostrarPedidos: [],
    }
    this.handleName = this.handleName.bind(this);
    this.pedidos = this.pedidos.bind(this)
  }
  // Función que guarda el nombre.
  handleName(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name, 'muestro mi nombre')
  }
  pedidos() {
    // Función que agrega una nueva colección a firebase
    db.collection('pedidos').add({
      name: this.state.name,
      datatime: new Date(),
    })
      .then((postNew) => {
        const collecionPedidos = db.collection('pedidos');
        const collecionPedidosOrdenada = collecionPedidos.orderBy('datatime', 'desc');
        collecionPedidosOrdenada.get().then((element) => {
          const pedidoNew = element.docs.map(doc => doc.data());
          console.log(pedidoNew, 'Pedidos')
          this.setState({
            mensaje: [],
            mostrarPedidos: pedidoNew,
            name: this.state.name,
          })
          this.inputName.current.value = ""
        })
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
  render() {
    return <Fragment>
      <input type="text" className="cliente" id="Cliente" placeholder="Nombre Cliente"
        onChange={this.handleName} ref={this.inputName}
      />
      <button onClick={this.pedidos}>Guardar</button>
    </Fragment>
  }
}
export default InputOrder;