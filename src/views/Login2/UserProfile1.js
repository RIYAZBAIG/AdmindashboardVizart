import React, { useState, useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

const UserProfile1 = () => {
  // Initialize the state with empty values
  const initialUserData = {
    company: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    aboutMe: "",
  };

  // Load saved data from session storage on component mount
  useEffect(() => {
    const savedUserData = sessionStorage.getItem("userProfileData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  const [userData, setUserData] = useState(initialUserData);

  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setUserData(initialUserData);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the data to session storage
    sessionStorage.setItem("userProfileData", JSON.stringify(userData));
    console.log("Saving profile data:", userData);
  };

  return (
    <div>
      {/* <h2>User Profile</h2> */}
      <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", maxHeight: "200px", overflow: "hidden" }}>
        <FormGroup>
          <Label for="company">Company (disabled)</Label>
          <Input
            type="text"
            name="company"
            id="company"
            value={userData.company}
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={userData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email address</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            value={userData.address}
            onChange={handleChange}
          />
        </FormGroup>
        {/* Add other form fields for the rest of the user data */}
        {/* ... */}

        <Button type="submit" color="primary">
          Save
        </Button>
        <Button type="button" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
      </form>
    </div>
  );
};

export default UserProfile1;
