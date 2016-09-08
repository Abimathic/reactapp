import React from 'react';

class State extends React.Component {
   constructor() {
      super();
      this.state = {
         data: [ ],
         check:
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },

            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },

            {
               "id":3,
               "name":"Baz",
               "age":"40"
            } ]
      }

      console.log(this);
      console.log("lll");

      this.ccc= "aaa";
      console.log(this);
      this.index = 0;
   };

   setStateHandler() {
      var item = this.index;
      var datas =  this.state.check.map((person) => (
        <p>{person.id} {person.name}!</p>))
      console.log(datas);
      console.log("kkkkkkk");
      var myArray = this.state.data;
      console.log(myArray);
      console.log("Array");
      myArray.push(datas)
      this.setState({data: myArray})
      this.state= { color: "red"}
      this.index += 1;
   };

   abi() {
      console.log("aaa");

   }



   render() {

      return (
         <div>
            <button onClick = {this.setStateHandler.bind(this)}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>

         </div>
      );
   }
}

export default State;
