import React from 'react';
import {Link} from 'react-router';

class Route extends React.Component {
  constructor(){
    super()


  }


   render() {
      console.log(this, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
      console.log(this.props, "gggggggggggggggggggg");
      console.log(this.props.children, "aaaaaaaaaaaaaaaaaaaa");
      alert("routesssssssss")
      return (
        <div>
        {this.props.children}
        <Link to = "back">Back</Link>
        </div>
      );
   }
}

export default Route;
