import { Formik, Field, Form } from "formik";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginPage() {
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
      console.log("Username already exist, choose different one.");
    } else {
      if (password === confirmPassword) {
        await addUser({
          username: login,
          password,
        });
        navigate("/login");
      } else {
        console.log("Your passwords doesn't match each other.");
      }
    }
  };

  let content;
  if (loggedUser) {
    content = <div>You can't register when logged in, logout first.</div>;
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
              confirmPassword: "",
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
              <div>
                <label>Confirm password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
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
