import React from 'react';
class Param extends React.Component {
  constructor(){
    super()
    this.state ={
       user: ''
    }

  }
   render() {
     console.log(this);
     console.log(this.props);
     console.log(this.props.params);
     alert("idddddddddddd")
      return (
         <div>
            <h3>Id is {this.props.params.id}</h3>

         </div>
      )
   }
}

export default Param;
