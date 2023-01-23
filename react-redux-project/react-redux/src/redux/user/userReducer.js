import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
} from './userTypes';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};

export default userReducer;
