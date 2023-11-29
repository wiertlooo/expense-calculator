import React from "react";
import DateList from "../components/DateList";
import { useSelector } from "react-redux";

function ExpensePage() {
  const loggedUser = useSelector((state) => state.auth.user);
  return (
    <div>
      {loggedUser ? (
        <DateList />
      ) : (
        <div>You need to log-in to use this functionality.</div>
      )}
    </div>
  );
}

export default ExpensePage;
