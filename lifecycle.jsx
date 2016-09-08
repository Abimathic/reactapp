import React from 'react';
import ReactDOM from 'react-dom';

class Cycle extends React.Component {

   constructor() {
      alert("willmount");
      super();

      this.state = {
         data: 0
      }


      this.setNewNumber = this.setNewNumber.bind(this)
      console.log(this.setNewNumber);


   };

   setNewNumber() {
      alert("lifecycle");
      this.setState({data: this.state.data + 1})
      alert(this.state.data);
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}


class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!');
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')

   }

   shouldComponentUpdate(newProps, newState) {
      alert("shouldComponentUpdate");
      return true;
   }




   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';

   }
   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
      console.log(newProps);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
       console.log(prevProps);
      console.log(prevState);
   }

    componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }



   render() {
      alert("will update");
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
            <div id = "myDiv">
               NODE
               <p> CHECK </p>
            </div>
         </div>
      );
   }
}

export default Cycle;
