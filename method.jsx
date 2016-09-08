import React from 'react';
import ReactDOM from 'react-dom';
import {Another, Check} from './another_initial.jsx';
import Eg_key from './keys.jsx';

class Parent extends React.Component {


   render() {
      console.log(this);
      console.log(this.props)
      console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
      return (
         <div>
            <Child ref="check"/>
            <button onClick={() => this.refs.check.abi()}>Click</button>
            <hr />
            <h3>Access parent component method in another parent component</h3>
            <button onClick={this.props.click.clearInput}>ClearInParent</button>
            <Check/>
            <Another/>
            <hr />
            <h3>Keys Concept</h3>
            <Eg_key/>
         </div>
      );
   }
}

class Child extends React.Component {

   abi()
   {
    alert("ok");
     var myDiv = document.getElementsByClassName('my')[0];
     console.log(ReactDOM.findDOMNode(myDiv));
     ReactDOM.findDOMNode(myDiv).style.color = 'red';

   }
   render() {
      return (
         <div>
            <div className = "my">
               <h3>Access child component method in child component</h3>
            </div>

         </div>
      );
   }
}
export default Parent;
