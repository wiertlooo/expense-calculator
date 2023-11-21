import React from "react";
import { useRemoveExpenseMutation } from "../store";

function ExpenseListItem({ expense }) {
  const [removeExpense, results] = useRemoveExpenseMutation();
  const handleClick = () => {
    removeExpense(expense);
  };
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="text-lg font-semibold mb-2">{expense.title}</div>
      <div className="text-gray-600">Value: {expense.value}</div>
      <div className="text-gray-600">Date: {expense.date}</div>
      <button
        onClick={handleClick}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Remove Expense
      </button>
    </div>
  );
}

export default ExpenseListItem;
