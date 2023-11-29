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
        console.log("Password doesn't match username");
      }
    } else {
      console.log("Username like this doesn't exist in the database.");
    }
  };

  let content;
  if (loggedUser) {
    content = <div>You are already logged in!</div>;
  } else {
    if (isFetching) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div>Error occured when fetching users data. </div>;
    } else {
      content = (
        <div>
          <Formik
            initialValues={{
              login: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label>Login</label>
                <Field type="text" id="login" name="login" />
              </div>
              <div>
                <label>Password</label>
                <Field type="password" id="password" name="password" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      );
    }
  }

  return <div>{content}</div>;
}

export default LoginPage;
