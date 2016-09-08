import React from 'react';
import ReactDOM from 'react-dom';
import Meth from './method.jsx';

class Exa_ref extends React.Component {

   constructor(props) {
      super(props);
      console.log(props);
      console.log("ssssssss");
      console.log(this);


      this.state = {
         data: ''
      }
      this.ggg = {
         data: { fruit: 'grapes'

         }
      }


      this.aaa ="aaaaaaaaaaaaaaaaaaa"

      {// alert(typeof(this.state));
      // alert(typeof(this.aaa));
      // alert(typeof(this.ggg.data));
      // alert(typeof(this.ggg.data.fruit));
      }



      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   clearInput() {
      console.log(this.refs);
      console.log(this.refs.myInput, "jjjjjjjjjjjjjjjjjjj");
      this.setState({data: ''});
      console.log(ReactDOM.findDOMNode(this.refs.myInput).value);
      this.refs.myInput.focus();
      this.refs.myInput.style.backgroundColor = 'LightPink';
   }

   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState}
               ref = "myInput" ></input>
            <h4>{this.state.data}</h4>
            <h4>{this["aaa"]}</h4>
            <Meth click = { this} />
         </div>
      );
   }
}

export default Exa_ref;
