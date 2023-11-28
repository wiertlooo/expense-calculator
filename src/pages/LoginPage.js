import { Formik, Field, Form } from "formik";
import { useFetchUsersQuery } from "../store";

function LoginPage() {
  const { data, error, isFetching } = useFetchUsersQuery();

  const handleSubmit = ({ login, password }) => {
    console.log(login, password);
  };

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error occured when fetching users data. </div>;
  } else {
    console.log(data);
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

  return <div>{content}</div>;
}

export default LoginPage;
