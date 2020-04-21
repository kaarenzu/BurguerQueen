import React from 'react';
import { db } from './ConfigFirebase.jsx';
import '../Css/breakfast.css'

class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: [],
      newArray: [],

    }
    this.onClickNewArray = this.onClickNewArray.bind(this);
  }
  onClickNewArray(event) {
    console.log(event.target, 'event')
    // console.log(event.target.value, 'event');
    const ArrayPedidos = this.state.newArray.push(event.target.name, event.target.value);
    console.log(ArrayPedidos, 'arraypedidos')

    //  this.state.newArray.push(event.target.value)
    // db.collection('pedidos').add({
    //   pedidos: this.state.newArray,
    //   datatime: new Date(),
    // })
    //   .then((postNew) => {
    //     const collecionPedidos = db.collection('pedidos');
    //     const collecionPedidosOrdenada = collecionPedidos.orderBy('datatime', 'desc');
    //     collecionPedidosOrdenada.get().then((element) => {
    //       const pedidoNew = element.docs.map(doc => doc.data());
    //       console.log(pedidoNew, 'Pedidos')
    //       this.setState({
    //         mensaje: [],
    //         mostrarPedidos: pedidoNew,
    //         newArray: this.state.newArray,
    //       })
    //     console.log(this.state.newArray, 'Se creo?')
    //     })
    //   })
    //     .catch((error) => {
    //       console.error('Error adding document: ', error);
    //   });


    // this.setState({newArray:event.target.value});
    console.log(this.state.newArray, 'nuevo array')

  }

  componentDidMount() {
    db.collection('desayuno').get().then((element) => {
      var newBreakfast = element.docs.map(doc => doc.data());
      this.setState({
        breakfast: newBreakfast,
      })
    })
  }
  render() {
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Agregar</th>
            </tr>
          </thead>
          {this.state.breakfast.map((element, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <th scope="row" onChange={this.onClickNewArray}>{element.name}</th>
                  <td value={element.price} onChange={this.onClickNewArray}>${element.price}</td>
                  <td><button name={element.name} value={element.price} className="Agregar" onClick={this.onClickNewArray}>Agregar</button></td>
                </tr>
              </tbody>
            )
          })
          }
        </table>
      </div>
    )
  }
}
export default Breakfast;