import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddUserForm1({ onAddUser, onCancel }) {
  const [user, setUser] = useState({
    empId: "",
    name: "",
    userType: "",
    email: "",
    mobile: "",
    reportingTo: "",
    lastLogin: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(user);
  };

  return (
    // <Form onSubmit={handleSubmit}>
    //   <h2>Add User</h2>
    //   <Form.Group as={Row} controlId="empId">
    //     <Form.Label column sm={4}>
    //       Employee ID:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="empId"
    //         value={user.empId}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="name">
    //     <Form.Label column sm={4}>
    //       Name:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="name"
    //         value={user.name}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="userType">
    //     <Form.Label column sm={4}>
    //       Type of User:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="userType"
    //         value={user.userType}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="email">
    //     <Form.Label column sm={4}>
    //       Email:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="email"
    //         name="email"
    //         value={user.email}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="mobile">
    //     <Form.Label column sm={4}>
    //       Mobile:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="mobile"
    //         value={user.mobile}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="reportingTo">
    //     <Form.Label column sm={4}>
    //       Reporting To:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="reportingTo"
    //         value={user.reportingTo}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="lastLogin">
    //     <Form.Label column sm={4}>
    //       Last Login:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="lastLogin"
    //         value={user.lastLogin}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <Form.Group as={Row} controlId="status">
    //     <Form.Label column sm={4}>
    //       Status:
    //     </Form.Label>
    //     <Col sm={8}>
    //       <Form.Control
    //         type="text"
    //         name="status"
    //         value={user.status}
    //         onChange={handleChange}
    //       />
    //     </Col>
    //   </Form.Group>

    //   <div className="text-center">
    //     <Button type="submit" variant="primary">
    //       Submit
    //     </Button>{" "}
    //     <Button variant="secondary" onClick={onCancel}>
    //       Cancel
    //     </Button>
    //   </div>
    // </Form>

    <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    <input
      type="text"
      name="reportingManager"
      placeholder="Reporting Manager"
      value={reportingManager}
      onChange={(e) => setReportingManager(e.target.value)}
    />
    <select
      name="locationType"
      value={locationType}
      onChange={(e) => setLocationType(e.target.value)}
    >
      <option value="">Select Location Type</option>
      <option value="office">Office</option>
      <option value="remote">Remote</option>
    </select>
    <select
      name="recordVisibility"
      value={recordVisibility}
      onChange={(e) => setRecordVisibility(e.target.value)}
    >
      <option value="">Select Record Visibility</option>
      <option value="public">Public</option>
      <option value="private">Private</option>
    </select>
    <input
      type="text"
      name="products"
      placeholder="Products"
      value={products}
      onChange={(e) => setProducts(e.target.value)}
    />
    <input
      type="text"
      name="location"
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
    <input
      type="text"
      name="level"
      placeholder="Level"
      value={level}
      onChange={(e) => setLevel(e.target.value)}
    />
    <input
      type="text"
      name="proficiency"
      placeholder="Proficiency"
      value={proficiency}
      onChange={(e) => setProficiency(e.target.value)}
    />
    <input
      type="text"
      name="committee"
      placeholder="Committee"
      value={committee}
      onChange={(e) => setCommittee(e.target.value)}
    />
    <input
      type="text"
      name="mobileNumber"
      placeholder="Mobile Number"
      value={mobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
    />
    <button type="submit">Submit</button>
    <button type="reset">Cancel</button>
  </form>
  );
}

export default AddUserForm1;
