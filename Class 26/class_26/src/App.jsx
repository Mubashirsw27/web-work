
import './App.css';
import React, { Component } from 'react';


// function Header(){
//   return(
//     <h1>Hello</h1>
//   );
// }

class App extends Component {
  render() {
   
    return (
      <div className='header'>
    <Header />

    <h2 style={{color:"red" ,fontSize:'50px'}}>World</h2>
    <img src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg" width='300px' alt=""/>
    </div>
    );
  }
}



export default App;