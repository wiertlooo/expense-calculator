import { Formik, Field, Form } from "formik";
import { loginUser, useFetchUsersQuery } from "../store";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const { data, error, isFetching } = useFetchUsersQuery();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.auth.user);

  const handleSubmit = ({ login, password }) => {
    const user = data.find(
      (element) => element.username.toLowerCase() === login.toLowerCase()
    );
    if (user) {
      if (user.password === password) {
        dispatch(loginUser(user));
      } else {
        alert("Password doesn't match username");
      }
    } else {
      alert("Username like this doesn't exist in the database.");
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
        <div className="mt-4">
          <Formik
            initialValues={{
              login: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form className="text-center">
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      );
    }
  }

  return <div>{content}</div>;
}

export default LoginPage;
