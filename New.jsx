import React from 'react';
import Lifecycle from './lifecycle.jsx';



class Check extends React.Component {
  constructor() {
      super();

      this.state = {
         header: "Header from state...",
         "content": "Content from state..."
      }
   }
   render() {
      return (
          <div>
          <p>{this.props.colordetail}</p>
          <h2>{this.state.header}</h2>
          <h2>{this.state.content}</h2>
          <Header headerProp = {this.state.header} color = {this.props.colordetail}/>
          <Lifecycle/>
          </div>

      );
   }
}

class Header extends React.Component {
   render() {

      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h4>{this.props.color}</h4>
         </div>
      );
   }
}
export default Check;
