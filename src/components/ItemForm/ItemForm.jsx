import { Field, Form, Formik } from "formik";
import React from "react";

const ItemForm = ({ onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ title: "", creator: "", genre: "" }}
    >
      <Form>
        <label htmlFor="title">Title:</label>
        <Field id="title" type="text" name="title" placeholder="Title" />

        <label htmlFor="creator">Creator:</label>
        <Field id="creator" type="text" name="creator" placeholder="Creator" />

        <label htmlFor="genre">Genre:</label>
        <Field id="genre" type="text" name="genre" placeholder="Genre" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ItemForm;
