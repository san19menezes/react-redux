import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
      <h2>User list</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p key={user.name}>{user.name}</p>)}
      </div>
    </>
  );
};

// Selector function - can also be extracted into a separate file
// State from the redux store is mapped to component props - used to access redux state in the component
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

// Dispatch function
// Map dispatch of an action creator to prop in our component - maps prop of component to redux action creator
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
