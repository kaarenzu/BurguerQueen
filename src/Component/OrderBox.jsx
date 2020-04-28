import React, { Fragment } from 'react';
import '../Css/orderBox.css';
import PropTypes from 'prop-types';
import equal from 'fast-deep-equal';
// import TablaPedidos from './TablaPedidos';
// 1.- Inyectar componente OrderBox
// 2.- Pasarle al componente OrderBox el arreglo this.state.newArray como prop
// 3.- En el componente OrderBox hacer un console.log de this.props para 
// asegurarnos que estamos recibiendo la data que queríamos recibir
// 4.- Hacer el map de esa data en el componente OrderBox
// <OrderBox foods={this.state.newArray} />


class OrderBox extends React.Component {
constructor(props){
  super(props);
  // console.log(props,'props')
  this.state= {
    eliminar:this.props.foods
  }
  this.onclickEliminar = this.onclickEliminar.bind(this);
}
onclickEliminar=(id)=> {
//  console.log(id,'id')

//  console.log(newEliminar, 'mostrando');
let eliminarD = this.state.eliminar.filter(item =>{
  return item.id !==id
})
//  var siBorra = newEliminar.splice(0);
 this.setState({eliminar:eliminarD})
// this.setState({eliminar:siBorra})
 console.log(this.state.eliminar, 'eliminar')

}
componentDidMount(){
  this.state.eliminar.map((item,key) => (
    <Fragment>
      <tr >
        <th key ={key.id}scope="col">{item.nombre}</th>
        <th scope="col">{item.precio}</th>
        <th scope="col">{item.id}</th>
        <th scope="col"><button className="Eliminar"
        onClick={()=>this.onclickEliminar(item.id)}id={item.id}>Eliminar</button></th>
      </tr>
    </Fragment>
  ))
}
// componentDidUpdate(prevProps, nextState){
 
//   if(!equal(this.props.foods,nextState)){
//      this.setState({eliminar: this.props.foods})
//       console.log(this.props.foods, ' props.foods upDate')
//       console.log(prevProps.foods, ' pre.foods upDate')
    
//   }
 
// }
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
            {this.state.eliminar.map((item,key) => (
              <Fragment>
                <tr >
                  <th key ={key.id}scope="col">{item.nombre}</th>
                  <th scope="col">{item.precio}</th>
                  <th scope="col">{item.id}</th>
                  <th scope="col"><button className="Eliminar"
                  onClick={()=>this.onclickEliminar(item.id)}id={item.id}>Eliminar</button></th>
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