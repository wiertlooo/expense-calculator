import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function ExpensePage() {
  return (
    <div>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default ExpensePage;
