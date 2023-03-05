import React from "react";
import { Form } from "react-bootstrap";

const ContentModalBody = (props) => {
  // const data = JSON.parse(localStorage.getItem("user"));

  return (
    <React.Fragment>
      <Form className="p-3" onSubmit={props.onSubmit}>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          className="mb-3"
          // value={data.username}
        />
        <Form.Control
          type="text"
          placeholder="Email"
          name="email"
          className="mb-3"
          // value={data.email}
        />
        <Form.Control
          type="text"
          placeholder="No Handphone"
          name="noHp"
          className="mb-3"
          // value={data.noHandphone}
        />
        <Form.Control
          type="text"
          placeholder="Usia"
          name="age"
          className="mb-3"
          // value={data.age}
        />
        <Form.Control
          type="text"
          placeholder="Berat Badan"
          name="beratBadan"
          className="mb-3"
          // value={data.beratBadan}
        />
        <Form.Control
          type="text"
          placeholder="Tinggi Badan"
          name="tinggiBadan"
          className="mb-2"
          // value={data.tinggiBadan}
        />

        <button className="btn btn-primary btn-md mt-5 mx-auto w-100">
          Save
        </button>
      </Form>
    </React.Fragment>
  );
};

export default ContentModalBody;
