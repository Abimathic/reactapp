import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Force extends Component {
   constructor() {

      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
            <Domnode/>

         </div>
      );
   }
}


class Domnode extends Component {
   constructor() {
      super();
      this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   findDomNodeHandler() {
      var myDiv = document.getElementsByClassName('myDivision')[0];
      console.log(myDiv);
      console.log("saaa");
      console.log(ReactDOM.findDOMNode(myDiv).style);
      ReactDOM.findDOMNode(myDiv).style.color = 'red';
   }

   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div className = "myDivision">
               NODE
               <p> CHECK </p>
            </div>
         </div>
      );
   }
}


export default Force;
