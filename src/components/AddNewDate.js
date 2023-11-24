import { Field, Form, Formik } from "formik";
import { useAddDateMutation } from "../store/apis/datesApi";

function AddNewDate() {
  const [addDate, results] = useAddDateMutation();

  const handleSubmit = (value, { resetForm }) => {
    addDate(value);
    resetForm();
  };
  return (
    <div className="flex items-center">
      <Formik
        initialValues={{
          date: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-row mx-auto items-center">
          <label className="mb-1 font-bold text-2xl">Choose date:</label>
          <Field
            type="date"
            id="date"
            name="date"
            className="p-2 border rounded-md mb-1"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddNewDate;
