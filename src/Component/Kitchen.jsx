import React, {Fragment} from 'react';
// import Navbar from './Navbar.jsx';
import '../Css/kitchen.css'
// import PropTypes from 'prop-types';
import {db} from './ConfigFirebase'

class Kitchen extends React.Component {
  constructor(props){
    super(props);
    console.log(props, 'props')
    this.state = {
      state:false,
      pedidos:[]
    
    }
    // this.mostrarPedidos = this.mostrarPedidos.bind(this);
  }
  componentDidMount(){
    
    const collecionPost = db.collection('pedidos');
    
    const collecionPostOrdenada = collecionPost.orderBy('datatime', 'desc');
    collecionPostOrdenada.get().then((element) => {
      const ListNew = element.docs.map(doc => doc.data().pedido);
      console.log(ListNew, 'list')

      
      
      this.setState({
        pedidos: ListNew
      })
    })
  }
    
  render(){
    return <Fragment>
      <div className ="containerKitchen">
      <table className="table table-dark" id="pedidosKitchen">
          <thead>
            <tr>
              <th scope="col">Pedidos Listos</th>
            
            </tr>
          </thead>
          <tbody>
        
              {this.state.pedidos.map((element, key,i) => {
                return (
                  <tr key={key}>
                  <th scope="col">{element.nombre}</th>
                <th scope="col">${element.precio}</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
                 
                )
              })
              }
         
           
            <tr>
              {/* <th scope="row"></th>
              <th scope="row"></th>
              <th scope="row"></th> */}
              
            </tr>
          </tbody>
        </table>
        <table className="table table-dark" id="pedidosKitchen">
          <thead>
            <tr>
              <th scope="col">Pedidos en espera</th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            <tr>
              {/* <th scope="row"></th>
              <th scope="row"></th>
              <th scope="row"></th> */}
              
            </tr>
          </tbody>
        </table>
        </div>
    </Fragment>

  }
}

export default Kitchen;
