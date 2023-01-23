import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
};

// Selector function - can also be extracted into a separate file
// State from the redux store is mapped to component props - used to access redux state in the component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// Dispatch function
// Map dispatch of an action creator to prop in our component - maps prop of component to redux action creator
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {
      dispatch(buyCake(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
