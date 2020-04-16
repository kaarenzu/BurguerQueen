/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Css/home.css';

class Home extends React.Component {

  render() {
    return (
      <div className="containerHome">
        <div className="home">
          <h1>Bienvenid@</h1>
          <img className="logo"
            onClick={this.onClickEstado}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwrFGUW3eAHH7c_izVW_iwr3YiM5sctJojK5Xe1ZgsSVypHKOu&usqp=CAU" />
        </div>
      </div>
    )
  }
}
export default Home;