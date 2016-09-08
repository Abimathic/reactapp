import React from 'react';
import New from './event_eg.jsx';

class Parentform extends React.Component{
   constructor(){
      super();
      this.state ={
         data: '',
         bata: 'dd',
         selectvalue: ''
      }

      this.updatedata = this.updatedata.bind(this);
      this.updatesecondtext = this.updatesecondtext.bind(this);
      this.handleChange = this.selectvaluemeth.bind(this);

   };

   updatedata(e){
      this.setState({data: e.target.value})
   }

   updatesecondtext(e){
      alert("ok")
      this.setState({bata: e.target.value})
   }

   selectvaluemeth(e){
      alert("check");
      console.log(e);
      console.log(e.target);
      console.log(e.target.value);
      this.setState({selectvalue: e.target.value})
      this.setState({abi: "haiii"})
   }

   focuse() {
      var x = document.getElementById("d");
      x.style.color = "LightSeaGreen";

   }




   render() {
      return(
         <div>
            <Child mydata={this.state.data} updatemethod={this.updatedata} secdata={this.state.bata} secupdatemethod={this.updatesecondtext} />
            <hr />
            <h3>Events</h3>
            <select id="d"
              onChange = {this.handleChange} onFocus = {this.focuse.bind(this)}
            >
             <option value="Orange">Orange</option>
             <option value="Radish">Radish</option>
             <option value="Cherry">Cherry</option>
             <option value="grapes">Grapes</option>
            </select>
            <h3>{this.state.selectvalue}</h3>
             <h3>{this.state.abi}</h3>
            <New/>
         </div>
         );

   }
}


class Child extends React.Component{
   render() {
      return(
         <div>
          First:<input type="text" value={this.props.mydata} onChange={this.props.updatemethod} />
          <br />
          <br />
          Second:<input type="text" value={this.props.secdata} onChange={this.props.secupdatemethod}/>
          <h3>first:{this.props.mydata}</h3>
          <h3>second:{this.props.secdata}</h3>
         </div>
         );

   }


}

export default Parentform;

