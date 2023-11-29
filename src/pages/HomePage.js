import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRemoveUserMutation } from "../store";
import { logoutUser } from "../store";

function HomePage() {
  const loggedUser = useSelector((state) => state.auth.user);
  const [removeUser] = useRemoveUserMutation();
  const dispatch = useDispatch();

  const handleRemoveUser = () => {
    removeUser(loggedUser);
    dispatch(logoutUser());
  };

  let content;
  if (loggedUser) {
    content = (
      <div>
        <h1>Welcome {loggedUser.username}</h1>
        <h2>You can delete your account by pressing DELETE button</h2>
        <button onClick={handleRemoveUser}>DELETE</button>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>Welcome!</h1>
        <h2>To use the app you need to log-in first.</h2>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default HomePage;
