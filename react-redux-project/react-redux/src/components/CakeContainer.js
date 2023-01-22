import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

// Selector function - can also be extracted into a separate file
// State from the redux store is mapped to component props - used to access redux state in the component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// Dispatch function
// Map dispatch of an action creator to prop in our component - maps prop of component to redux action creator
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
