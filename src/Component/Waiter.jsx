import React, { Fragment } from 'react';
import '../Css/waiter.css';
// import Breakfast from './Breakfast';
// import Lunch from './Lunch.jsx';
// import OrderBox from './OrderBox.jsx';
// import InputOrders from './InputOrders';
import { db } from './ConfigFirebase.jsx';
import OrderBox from './OrderBox.jsx';



class Waiter extends React.Component {
  constructor() {
    super();
    this.state = {
      breakfast: [],
      newOrder: [],
      lunch: []

    }
    // this.onclickBreakfast = this.onclickBreakfast.bind(this);
    // this.onclickLunch = this.onclickLunch.bind(this);
    this.onClickNewOrder = this.onClickNewOrder.bind(this);

  }
  onClickNewOrder(event) {
    // console.log(event.target, 'event')
    const ArrayPedidos = this.state.newOrder;

    let obj = {
      nombre: event.target.name,
      precio: event.target.value,
      id: event.target.id
    }
    ArrayPedidos.push(obj)
    this.setState({ newOrder: ArrayPedidos })



    // console.log(ArrayPedidos, 'arraypedidos')
    // console.log(this.state.newOrder, 'nuevo array')

  }
  componentDidMount() {
    db.collection('almuerzo').get().then((element) => {
      const newLunch = element.docs.map(doc => doc.data());
      this.setState({
        lunch: newLunch
      })
    })
    db.collection('desayuno').get().then((element) => {
      const newBreakfast = element.docs.map(doc => doc.data());
      this.setState({
        breakfast: newBreakfast,

      })
    })
  }
  render() {
    return (
      <Fragment>
        <div className="totalWaiterTabl">
          <div className="containerTablaBreak">
            <table className="table table-dark" id="Tabla">
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
                      <th key={element.id} scope="row" onChange={this.onClickNewOrder}>{element.name}</th>
                      <td value={element.price} onChange={this.onClickNewOrder}>${element.price}</td>
                      <td><button name={element.name} value={element.price} id={element.id} className="Agregar"
                        onClick={this.onClickNewOrder}>Agregar</button></td>
                    </tr>
                  </tbody>
                )
              })
              }
            </table>

            <table className="table table-dark" id="Tabla">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Agregar</th>
                </tr>
              </thead>
              {this.state.lunch.map((element, key) => {
                return (
                  <tbody key={key}>
                    <th scope="row" key={element.id} onChange={this.onClickNewOrder}>{element.name}</th>
                    <td value={element.price} onChange={this.onClickNewOrder}>${element.price}</td>
                    <td><button name={element.name} value={element.price} id={element.id} className="Agregar"
                      onClick={this.onClickNewOrder}>Agregar</button></td>
                  </tbody>
                )
              })
              }
            </table>

          </div>
          <div className="divOrder"> <OrderBox foods={this.state.newOrder} /></div>
        </div>







      </Fragment>
    )
  }
  // Función que muestra/oculta el menú desayuno y oculta almuerzo
  // onclickBreakfast() {
  //   if (!this.state.desayuno) {
  //     this.setState({ desayuno: true })
  //   }
  //   if (this.state.desayuno) {
  //     this.setState({ desayuno: false })
  //   }
  //   // Condición que oculta almuerzo
  //   if (!this.state.lunch) {
  //     this.setState({ lunch: true })
  //   }
  //   console.log(this.state.desayuno, 'mi estado')
  // }
  // Función que muestr/oculta el menú almuerzo y oculta desayuno
  // onclickLunch() {
  //   if (!this.state.lunch) {
  //     this.setState({ lunch: true })
  //   }
  //   if (this.state.lunch) {
  //     this.setState({ lunch: false })
  //   }
  //   // Condición que oculta desayuno
  //   if (!this.state.desayuno) {
  //     this.setState({ desayuno: true })
  //   }
  //   console.log(this.state.lunch, 'mi estado')
  // }
  // render() {
  //   return (
  //     <Fragment>
  //       <div className="divTotal">
  //         <div className="waiter">
  //           {/* <button className="btn btn-success btn-lg" id="btn"
  //             onClick={this.onclickBreakfast}>Desayuno</button>
  //           <button className="btn btn-danger btn-lg" id="btn"
  //             onClick={this.onclickLunch}>Almuerzo</button>
  //           <InputOrders /> */}
  //         </div>
  //         <div className="containerTabla">
  //           {/* {!this.state.desayuno ? <Breakfast /> : null}
  //           {!this.state.lunch ? <Lunch /> : null}
  //           <OrderBox /> */}
  //         </div>
  //       </div>
  //     </Fragment>)
  // }
}
export default Waiter;