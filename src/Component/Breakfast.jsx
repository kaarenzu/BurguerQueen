import React from 'react';
import { db } from './ConfigFirebase.jsx';
import '../Css/breakfast.css';
import OrderBox from './OrderBox.jsx';

class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: [],
      newOrder: [],

    }
    this.onClickNewOrder = this.onClickNewOrder.bind(this);
  }
  onClickNewOrder(event) {
    console.log(event.target, 'event')
    const ArrayPedidos = this.state.newOrder;
    
    let obj = {
      nombre: event.target.name,
      precio:event.target.value,
      id: event.target.id
    }
    ArrayPedidos.push(obj)
    this.setState({newOrder:ArrayPedidos})



    console.log(ArrayPedidos, 'arraypedidos')
    console.log(this.state.newOrder, 'nuevo array')

  }

  componentDidMount() {
    db.collection('desayuno').get().then((element) => {
      const newBreakfast = element.docs.map(doc => doc.data());
      this.setState({
        breakfast: newBreakfast,
      })
    })
  }
  render() {
    return (
      <div className="containerTablaBreak">
        <table className="table table-dark"id ="Tabla">
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
                  <th scope="row" onChange={this.onClickNewOrder}>{element.name}</th>
                  <td value={element.price} onChange={this.onClickNewOrder}>${element.price}</td>
                  <td><button name={element.name} value={element.price} id={element.id}className="Agregar" 
                  onClick={this.onClickNewOrder}>Agregar</button></td>
                </tr>
              </tbody>
            )
          })
          }
        </table>
         <OrderBox foods={this.state.newOrder} />
      </div>
      
    )
    
  }
}


export default Breakfast;