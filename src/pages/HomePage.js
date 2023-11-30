import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRemoveUserMutation } from "../store";
import { logoutUser } from "../store";

function HomePage() {
  const loggedUser = useSelector((state) => state.auth.user);
  const [removeUser] = useRemoveUserMutation();
  const dispatch = useDispatch();

  //handler responsible for deleting account
  const handleRemoveUser = () => {
    removeUser(loggedUser);
    dispatch(logoutUser());
  };

  let content;
  if (loggedUser) {
    content = (
      <div className="mx-auto mt-4 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome, {loggedUser.username}!
        </h1>
        <p className="text-lg mb-2">We're glad to have you here.</p>
        <p className="text-lg mb-4">
          You can delete your account by pressing the DELETE button below:
        </p>
        <button
          onClick={handleRemoveUser}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          DELETE
        </button>
      </div>
    );
  } else {
    content = (
      <div className="mx-auto mt-4 text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
        <p className="text-lg mb-4">
          To use the app, you need to log in first.
        </p>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default HomePage;
