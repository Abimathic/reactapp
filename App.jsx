import React from 'react';
import { Link } from 'react-router'
import Checking from './New.jsx';
import styles from './show.css';
import Validate from './validation.jsx';
import Setstate from './setstate.jsx';
import Force from './forceupdate.jsx';
import Input from './form.jsx';


class App extends React.Component {
   constructor() {
      super();

       console.log(this);

      this.state = {
         color: "red",
         data:
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
            }
         ],

         val:
         [
            {
               "id":1,
               "name":"first paramssss"
            },
            {
               "id":2,
               "name":"second paramssss"
            }
          ]
      }
   }
   render() {
    var i = 1;
    var myStyle = {
         fontSize: 25,
         color: 'grey'
      }
    var f = (num1,num2) => { return num1+num2; }
    console.log(f(2,3))
    var a;
    if (i == 1) {
       a = <h2>gggg</h2>
    } else {
      a = <h2>sss</h2>
    }
    console.log(this,"childrennnnnnnnnnnnnnnnn")
    console.log(this.props,"childrennnnnnnnnnnnnnnnn")
    console.log(this.props.children,"chil")

      return (
        <div>
          Helloooo worlddddddd!!
         <h1 className={styles.check}>Header</h1>
         <h2>Content</h2>
         <p data-attribute = "somevalue">This is the contentttttttttt</p>
         <h2>{2+1}</h2>
          <h2>{i == 1 ? 'check' : 'False'}</h2>
          <p style = {myStyle}>Header</p>
          <hr />
          <h4> parent child concept </h4>
          <Checking colordetail={this.state.color}/>
          <Validate/>
          {a}
          <h3>SwitchCase</h3>
          <p>
            {(() => {
              2+1
            })()}
          </p>
          <table>
           <tbody>
              {this.state.data.map((person, i) => <TableRow key = {i} datas = {person} kkk />)}
           </tbody>
        </table>
        <h1>{this.props.headerProp}</h1>
        <Setstate/>
        <Force/>
        <Input/>
        <hr />
        <h3>Routing concept </h3>
         <Link to = "home">Home</Link>
         <br />
         {this.state.val.map(function(a){
          return <p> <Link to ={"map/" + a.id}>{a.name}</Link>
                  </p>

         })}




        </div>
    );

   }
}

class TableRow extends React.Component {
   render() {
      console.log(this);
      return (
         <tr>
            <td>{this.props.datas.id}</td>
            <td>{this.props.datas.name}</td>
            <td>{this.props.datas.age}</td>
         </tr>
      );
   }
}





{
  // var App = React.createClass({

//   render() {
//     return (
//         <div>
//           Helloooo worlddddddd!!
//           <br />
//           <a href="http://www.google.com">Google</a>
//         </div>
//       );

//    }

// });

}

console.log(App);
console.log("new");

App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default App;






