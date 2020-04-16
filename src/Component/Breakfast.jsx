import React from 'react';
import { db } from './ConfigFirebase.jsx';
import '../Css/breakfast.css'

class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: [],
    }
  }
  componentDidMount() {
    db.collection('desayuno').get().then((element) => {
      const newBreakfast = element.docs.map(doc => doc.data());
      this.setState({
        breakfast: newBreakfast
      })
    })
  }
  render() {
    return (
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Agregar</th>
            </tr>
          </thead>
          {this.state.breakfast.map((element, key) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{element.name}</th>
                  <td>${element.price}</td>
                  <td><button className="Agregar">Agregar</button></td>
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