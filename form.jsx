import React from 'react';
import Newform from './form_child.jsx';

class Input extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         name: 'ss',
         address: '',
         check: '',
         check1: ''

      }

      this.updatename = this.updateStatess.bind(this);
      this.updateaddress = this.updateaddr.bind(this);

   };

   updateStatess(e) {
      console.log("event");
      console.log(e);
      console.log(e.target);
      console.log(e.target.value);
      this.setState({name: e.target.value});
   }

   updateaddr(e) {
      this.setState({address: e.target.value});
   }
   updatedvalues() {

      this.setState({check: this.refs.aaa.value});
       var y = document.getElementById('bbb');
      this.setState({check1:y.value});


   }


   render() {
      return (
         <div>
            <hr />
            <h3>Form </h3>
            Name: <input type = "text"
               ref = "aaa" onChange = {this.updatename} />
            <br />
            <br />
            Address:<input type = "text"
               id = "bbb" onInput = {this.updateaddress} />
            <button onClick = {this.updatedvalues.bind(this)}>SET STATE</button>
            <h4>Name:{this.state.name}</h4>
            <h4>Address:{this.state.address}</h4>
            <h4>check:{this.state.check}</h4>
            <h4>check1:{this.state.check1}</h4>
            <Newform />
         </div>
      );
   }
}

export default Input;
