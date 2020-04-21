import React, {Fragment} from 'react';
// import Navbar from './Navbar.jsx';
import '../Css/kitchen.css'

class Kitchen extends React.Component {
  constructor(){
    super();
    this.state = {
      state:false,
    }
  }
  render(){
    return<Fragment>
      <div className ="containerKitchen">
      <table className="table table-dark" id="pedidosKitchen">
          <thead>
            <tr>
              <th scope="col">Pedidos Listos</th>
            
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
