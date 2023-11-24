import { Field, Form, Formik } from "formik";
import { useAddDateMutation } from "../store/apis/datesApi";

function AddNewDate() {
  const [addDate, results] = useAddDateMutation();

  const handleSubmit = (value, { resetForm }) => {
    addDate(value);
    console.log(value);
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          date: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Choose date:</label>
          <Field type="date" id="date" name="date" />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddNewDate;
