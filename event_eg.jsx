import React from 'react';
import Eg_ref from './ref.jsx';


class Exa_event extends React.Component {

   constructor() {
      super();

      this.state = {
         data: 'focusin',
         check: ' new data',
         ggg: 'focusin'
      }

      this.filter = {
         check: 'true'

      }

      this.updateState = this.updateState.bind(this);
      this.selectevent = this.selectevent.bind(this);


   };

   updateState() {

      if(this.state.data == 'focusin'){
         this.setState({data: 'focusout'})
         var x = document.getElementById("sec").focus();
         this.filter = { check: 'false'}
      }
      else{
         this.setState({data: 'focusin'})
         var x = document.getElementById("sec").blur();
         this.filter.check = 'true'
      }

   }

   selectevent(e) {
      console.log(e);
      alert("selected the onselect event");
   }
   keydownevent() {
      alert("keydownevent");
   }

   wheelevent() {
      var x = document.getElementById("new");
      console.log(x);
      console.log(x.value);
      x.value = x.value.toUpperCase();
   }
   blurevent() {
      alert("blurevent");
   }

   copyevent() {
      this.setState({check: 'you copied  a text'})
   }




   render() {
      return (
         <div>

            <h4>{this.state.data}</h4>
            <input type="text" value={this.state.data} onSelect={this.selectevent} />
            <br />
            <br/>
            <h4>KeyDown KeyPress KeyUP</h4>
            <input type="text" onKeyDown = {this.keydownevent.bind(this)} />
            <input type="text" onKeyPress = {this.keydownevent.bind(this)} />
            <input type="text" onKeyUp = {this.keydownevent.bind(this)} />
            <h4> wheelevent</h4>
            <input type="text" id= "new" onWheel = {this.wheelevent.bind(this)} />
            <h4> blurevent</h4>
            <input type="text" onBlur = {this.blurevent.bind(this)} />
            <h4> focusevent</h4>
            <button onClick = {this.updateState}>{this.state.data}</button>
            <h4>{this.filter.check}</h4>
            <input type="text" id= "sec" />
            <h4> copyevent</h4>
            <input type="text" value={this.state.ggg} onCopy = {this.copyevent.bind(this)} />
            <h4>{this.state.check}</h4>
            <hr />
            <h3>Using Refs</h3>
            <Eg_ref/>
         </div>
      );
   }
}

export default Exa_event
