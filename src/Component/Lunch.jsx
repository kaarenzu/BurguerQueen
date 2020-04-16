import React from 'react';
import { db } from './ConfigFirebase.jsx';
import '../Css/breakfast.css'

class Lunch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lunch: []
    }
  }
  componentDidMount() {
    db.collection('almuerzo').get().then((element) => {
      const newLunch = element.docs.map(doc => doc.data());
      this.setState({
        lunch: newLunch
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
          {this.state.lunch.map((element, key) => {
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
export default Lunch;