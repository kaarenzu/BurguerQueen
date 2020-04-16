import React,{Fragment}from 'react';
import '../Css/waiter.css';
import Breakfast from './Breakfast';
import Lunch from './Lunch.jsx';
import OrderBox from './OrderBox.jsx';

class Waiter extends React.Component{
  constructor(){
    super();
    this.state = {
      
      desayuno: true,
      lunch: true

    }
    this.onclickBreakfast = this.onclickBreakfast.bind(this);
    this.onclickLunch = this.onclickLunch.bind(this);
  }
  onclickBreakfast(){
    if (!this.state.desayuno) {
      this.setState({ desayuno: true })
    }
    if (this.state.desayuno) {
      this.setState({ desayuno: false })
    }
    if (!this.state.lunch) {
      this.setState({ lunch: true })
    }
    console.log(this.state.desayuno, 'mi estado')
  }
  onclickLunch(){
    if (!this.state.lunch) {
      this.setState({ lunch: true })
    }
    if (this.state.lunch) {
      this.setState({ lunch: false })
    }
    if (!this.state.desayuno) {
      this.setState({ desayuno: true })
    }
    console.log(this.state.lunch, 'mi estado')
  }
  render(){
   
      return(<Fragment>
        
      <div className="divTotal">
        <div className="waiter">
        <button className="btn btn-success btn-lg" id="btn" onClick={this.onclickBreakfast}>Desayuno</button>
         <button className="btn btn-danger btn-lg" id="btn"onClick={this.onclickLunch}>Almuerzo</button>
       
        </div>
        <div className="containerTabla">
        {!this.state.desayuno?<Breakfast/>: null}
        {!this.state.lunch?<Lunch/>: null}
        <OrderBox/>
        </div>
        
    </div>
    </Fragment>)

    
   
      
   
  }
}
export default Waiter;