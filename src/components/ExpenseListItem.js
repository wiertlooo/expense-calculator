import React from "react";

function ExpenseListItem({ expense }) {
  return (
    <div>
      <div>Expense type: {expense.title}</div>
      <div>Expense value: {expense.value}</div>
      <div>Expense date: {expense.date}</div>
    </div>
  );
}

export default ExpenseListItem;
