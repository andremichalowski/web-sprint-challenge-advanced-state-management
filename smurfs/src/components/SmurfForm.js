import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { postNewSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";

const SmurfForm = (props) => {
  const handleSubmit = (values) => {
    //PREVIOUS NON REDUX WAY OF POSTING
    // axios
    //   .post("http://localhost:3333/smurfs", values)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
    //   console.log("submit form");

    // postNewSmurf(values);
    // useEffect(() => {
    //   props.postNewSmurf();
    // }, []);
    props.postNewSmurf(values);
    console.log("here");
  };

  return (
    <Formik
      initialValues={{ name: "", age: "", height: "", id: 0 }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      <div className="form">
        <Form>
          <Field name="name" placeholder="name" style={{ margin: "10px" }} />
          <Field name="age" placeholder="age" style={{ margin: "10px" }} />
          <Field
            name="height"
            placeholder="height"
            style={{ margin: "10px" }}
          />

          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};

export default connect(null, { postNewSmurf })(SmurfForm);
