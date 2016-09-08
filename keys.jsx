import React from 'react';


class Eg_key extends React.Component {
   constructor() {
      super();


      this.state = {
         data:
         [
            {
               component: 'First...',
               id: 1
            },

            {
               component: 'Second...',
               id: 2
            },

            {
               component: 'Third...',
               id: 3
            }
         ],
         people:
         [
          {
               aaa: 'Filter',
               bbb: 12
            },
            {
               aaa: 'ssssssss',
               bbb: 12
            }
         ]
      }




   }
render() {
   console.log(this.state.data.map((dynamic) => dynamic) + "ggggggggggggggggg")
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Content
                  index = {i} componentData = {dynamicComponent}/>)}
               {this.state.people.map((a,i) => <p><a> {i + " " +a.aaa + " " +a.bbb} </a></p>)}




            </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      console.log(this);
      console.log(this.props, "kkkkkkkkkkkkkkkkkkkkkkkkkkkk")
      console.log(this.props.componentData + "abiiiiiiiiiiiiiiiiiiiii")
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}

export default Eg_key;
