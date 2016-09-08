import React from 'react';
import ReactDOM from 'react-dom';

export class Another extends React.Component {
  constructor(){
    super()
  }


   render() {
      console.log(this, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
      return (
        <div>
        <hr />
        <h3> Export and Import multiple components </h3>
         <h4>test</h4>
         </div>
      );
   }
}

export class Check extends React.Component {
  constructor(){
    super()
  }


   render() {
      console.log(this,"chhhhhhhhhhhhhhhhhhhhhhhhhh");
      return (
         <h4>checkkkkkkkkkkkkkkkkkkkk</h4>
      );
   }
}


