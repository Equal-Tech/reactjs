import { Field, Form, Formik } from "formik";
import React from "react";

const LibraryForm = () => {
  const onSubmit = (values) => {
    //console.log("Submitting form with values:", values);
    fetch(`https://601598ce55dfbd00174ca670.mockapi.io/libraries/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: values.name })
    });
  };

  return (
    <Formik initialValues={{ name: "" }} onSubmit={onSubmit}>
      <Form>
        <label htmlFor="name">Name: </label>
        <Field id="name" type="text" name="name" placeholder="Title" />
        <button type="submit" onSubmit={onSubmit}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default LibraryForm;
