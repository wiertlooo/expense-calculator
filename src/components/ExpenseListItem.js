import React from "react";
import { useRemoveExpenseMutation } from "../store";
import { GoTrash } from "react-icons/go";

function ExpenseListItem({ expense }) {
  const [removeExpense, results] = useRemoveExpenseMutation();
  const handleClick = () => {
    removeExpense(expense);
  };
  return (
    <div className="bg-white p-2 rounded-md shadow-md">
      <div className="text-lg font-semibold mb-2">{expense.title}</div>
      <div className="text-gray-600">Value: {expense.value}</div>
      <GoTrash onClick={handleClick} />
    </div>
  );
}

export default ExpenseListItem;
