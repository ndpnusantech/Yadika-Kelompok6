import React from "react";
import { Form } from "react-bootstrap";

const ContentModalBody = () => {
  const handleSave = (e) => {
    e.preventDefault();
    const newUsername = e.target.username.value;
    const newEmail = e.target.email.value;
    const newNoHp = e.target.noHp.value;
    const addAge = e.target.age.value;
    const addBB = e.target.beratBadan.value;
    const addTB = e.target.tinggiBadan.value;

    let user = JSON.parse(localStorage.getItem("user")) || {};

    user.username = newUsername;
    user.email = newEmail;
    user.noHandphone = newNoHp;
    user.age = addAge;
    user.beratBadan = addBB;
    user.tinggiBadan = addTB;

    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <React.Fragment>
      <Form className="p-3" onSubmit={handleSave}>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          className="mb-2"

        />
        <Form.Control
          type="text"
          placeholder="Email"
          name="email"
          className="mb-2"
         
        />
        <Form.Control
          type="text"
          placeholder="No Handphone"
          name="noHp"
          className="mb-2"
         
        />
        <Form.Control
          type="text"
          placeholder="Age"
          name="age"
          className="mb-2"
         
        />
        <Form.Control
          type="text"
          placeholder="Berat Badan"
          name="beratBadan"
          className="mb-2"
         
        />
        <Form.Control
          type="text"
          placeholder="Tinggi Badan"
          name="tinggiBadan"
          className="mb-2"
         
        />

        <button className="btn btn-primary btn-md mt-5 mx-auto w-100">
          Save
        </button>
      </Form>
    </React.Fragment>
  );
};

export default ContentModalBody;