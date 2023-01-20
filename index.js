const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

//action creator
function buyCake() {
  //returns an action
  return {
    type: BUY_CAKE,
  };
}
function buyIceCream() {
  //returns an action
  return {
    type: BUY_ICE_CREAM,
  };
}

// Reducer

// const initialState = {
//   numOfCakes: 10,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         numOfCakes: state.numOfCakes + 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeInitialState = {
  numOfCakes: 10,
};

const iceCreamInitialState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
