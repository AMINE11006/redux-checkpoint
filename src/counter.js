import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'

const mapStateToProps = state => {
  console.log(state);
  return {
    count: state.count
  };
 };
 

const Counter = (props) =>{
console.log(props);
  const increment = () =>{
    props.dispatch({type: "INCREMENT"});
  };
  const decrement = () =>{
    props.dispatch({type: "DECREMENT"});
  };
   return (
     <div className="counter">
       <h2>Counter</h2>
       <div style={{backgroundColor: "gray", padding: "20px", width: "20%", margin: "auto", borderRadius: "10px"}}>
         <Button variant="outline-danger" onClick={() => decrement()} style={{marginRight: "10px"}}>-</Button>
         <span className="count">{props.count}</span>
         <Button variant="outline-success" onClick={() => increment()} style={{marginLeft: "10px"}}>+</Button>
       </div>
     </div>
   );
 }

export default connect(mapStateToProps)(Counter);