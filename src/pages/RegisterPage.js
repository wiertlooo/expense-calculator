import React from "react";
import { Formik, Field, Form } from "formik";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RegisterPage() {
  const { data, error, isFetching, refetch: fetchUsers } = useFetchUsersQuery();
  const loggedUser = useSelector((state) => state.auth.user);
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async ({ login, password, confirmPassword }) => {
    await fetchUsers();

    const user = data.find(
      (element) => element.username.toLowerCase() === login.toLowerCase()
    );
    if (user) {
      alert("Username already exists, please choose a different one.");
    } else {
      if (password === confirmPassword) {
        await addUser({
          username: login,
          password,
        });
      } else {
        alert("Your passwords don't match each other.");
      }
    }
  };

  let content;
  if (loggedUser) {
    content = (
      <div className="text-center mt-4">
        <p>You are already logged in. Please log out before registering.</p>
      </div>
    );
  } else {
    if (isFetching) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div>Error occurred when fetching users data. </div>;
    } else {
      content = (
        <div>
          <Formik
            initialValues={{
              login: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form className="text-center mt-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="login"
                >
                  Login
                </label>
                <Field
                  type="text"
                  id="login"
                  name="login"
                  className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      );
    }
  }

  return <div>{content}</div>;
}

export default RegisterPage;
