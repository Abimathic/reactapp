import React from 'react';

class Validate extends React.Component {
   render() {
      console.log(this);
      console.log("kkk");
      return (
         <div>

            <h3>Array: {this.props.propArr}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
         </div>
      );
   }
}

Validate.propTypes = {
   propArr: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired

}

Validate.defaultProps = {
   propArr: [1,2,3,4,5],
   propBool: true,
   propFunc: e => e,
   propString: "String value...",

   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}

export default Validate;
