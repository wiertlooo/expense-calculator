import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store";

function Header() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.auth.user);

  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl font-bold">Expense Calc</h1>
      <nav className="mt-4 flex justify-between">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:underline">
              Home Page
            </Link>
          </li>
        </ul>
        {loggedUser ? (
          <>
            <ul className="ml-4 mr-auto text-white">
              <li>
                <Link to="/expenses" className="hover:underline">
                  Expenses
                </Link>
              </li>
            </ul>
            <ul className="flex space-x-4 text-white">
              <li>
                <Link
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  to="/"
                  className="hover:underline"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex space-x-4 text-white">
              <li>
                <Link to="/register" className="hover:underline">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
