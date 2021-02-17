import React from 'react';
import {connect} from 'react-redux';

const Display = (props) => {

  return(
    <div style={{color: 'white', width: '30%'}}>
      {props.quote}
    </div>
)
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote
  }
}

export default connect(mapStateToProps)(Display);
