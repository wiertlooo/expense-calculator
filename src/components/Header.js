import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl font-bold">Expense Calc</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:underline">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/expenses" className="hover:underline">
              Expenses
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
