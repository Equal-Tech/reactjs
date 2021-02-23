import { Field, Form, Formik } from "formik";
import React from "react";
import "./ContactUsForm.css";
import { useHistory } from "react-router-dom";

const ContactUsForm = () => {
  const history = useHistory();
  const onSubmit = (values) => {
    console.log(values);
    const { name, email, feedback } = values;

    fetch(`https://6025712536244d001797c3d8.mockapi.io/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, feedback })
    })
      .then(history.push("/feedback"))
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", query: "" }}
      onSubmit={onSubmit}
    >
      <Form className="contact-us-form">
        <label htmlFor="name">Name: </label>
        <Field id="name" type="text" name="name" placeholder="Your name" />

        <label htmlFor="feedback">Feedback: </label>
        <Field
          id="feedback"
          name="feedback"
          as="textarea"
          placeholder="Leave us some feedback!"
        />
        <label htmlFor="email">Email address: </label>
        <Field id="email" name="email" placeholder="Your email" />

        <button type="submit" onSubmit={onSubmit}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactUsForm;
