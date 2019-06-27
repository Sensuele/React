import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';


const Counter = ({counter, inc, dec, clr}) => {
  return (
    <div  >
      <h1 className="counter">{counter}</h1>
      <div className="btns">
        <div onClick={inc} className="btn btn-success" ></div>
        <button onClick={dec} className="btn btn-warning" ></button>
        <div onClick={clr} className="btn btn-danger" ></div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter);