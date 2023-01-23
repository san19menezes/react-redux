import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

// Selector function - can also be extracted into a separate file
// State from the redux store is mapped to component props - used to access redux state in the component
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// Dispatch function
// Map dispatch of an action creator to prop in our component - maps prop of component to redux action creator
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
