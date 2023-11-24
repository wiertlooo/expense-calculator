import React from "react";
import { Formik, Field, Form } from "formik";
import { useAddExpenseMutation } from "../store";

function ExpenseForm() {
  const [addExpense, results] = useAddExpenseMutation();
  const handleSubmit = (values, { resetForm }) => {
    addExpense(values);
    resetForm();
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Add Expense</h1>
      <Formik
        initialValues={{
          value: 0,
          title: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label
              htmlFor="value"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Value:
            </label>
            <Field
              type="number"
              id="value"
              name="value"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Description:
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default ExpenseForm;
