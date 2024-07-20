import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddUserPage from "./AddUserPage";
function SystemUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddUserPageVisible, setIsAddUserPageVisible] = useState(false);
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setIsAddUserPageVisible(false);
  };

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'http://dev.vizart.traversetec.co/api/v1/user/lists';

    const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjNkNjQ4OGJlZWQzMGVkMzU1ZTJmYTZkM2QwZDg5YTk3YmNkNTEzMTEyYjJhNDNmZWNiMjJiYjg1MTI1N2MzYjM0MGU1NzYyZGQyMDI5ZDgiLCJpYXQiOjE2OTUxMDM1ODMuOTYzNDQ2LCJuYmYiOjE2OTUxMDM1ODMuOTYzNDQ5LCJleHAiOjE3MjY3MjU5ODMuOTU0OTcxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.UoV7uinBXIpVKzNv89iLn2k-hJ19-Fg-i0h4_fPv8OpM1x_2aWc8jXBNW3YDz7FXleTkBTMK8pxcIm52EkyP6VHgK6FrDxRDks2DngVgArkfvU4cdyJhRxz45KvOawmDMHYUJvmdGAUIf6W7Ss32_meaJhegTBkENQnBD2e2dEfg-ztRy_z6rNNaBCQCjv7pBmh9no-QU15T0Vd1Tj3lR3OzAoVpMVlwZYHhQo88N9ef4djtxVNPqu7rnquiU0QYvDHPJ1Wrl7vkaeBZtFGtyhPoXojWuk4nOqG18TlSfWzYxfplrH-_DbR7m5rWyYJb9AeeV924NH8iedDo0DJ6g0Fgj6FmbmjwWgXzzMMcYrsfyTiaNWvgCae6LYwJPCsYghgue7WTZb4I9CtUbSRmxBjIsdLvrW_q0pAbkoowTPBsuOZn9QEReAr5EYNnXjEiQcaGpH5X1cc4RO1Du73Vpa8qKDlZvaSVeFFWugxuK_9wN-c6ahFhcauDulDk5jIgwsoUMfhnMcmT5vE0ZtJ8-aBJ69hSvaETaeZpH4truk0LwBMePgEm1LTC4S_y8K8loc4ZGl1-rgH7V-1flpS208dU1edoItbKyzi6VpCSZfHpHHX1io8WUMe1lA3_S-x3HUulFl6Vht9n2PnBYNFEVYH5GcPIVKULjVw1aVGfhxw'; // Replace with your actual bearer token

    // Make the API POST request with the bearer token
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken}`, // Include the bearer token in the request headers
        'Content-Type': 'application/json', // Set the content type as JSON if needed
      },
      // body: JSON.stringify(requestBody), // Include request body data if needed
    })
      .then((response) => response.json())
      .then((data) => {
        const userArray = data.users; // Extract the array of users
        setUsers(userArray);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
  <div>
    <Link to="./deleteuserform" >
    <button type="button" class="btn btn-warning">Delete User</button>
    </Link>
  <Link to="/AddUserPage" > 
      {/* <h2>List of Users</h2> */}
      <button  type="submit" class="btn-fill btn btn-primary" fdprocessedid="mfu63"
        onClick={() => setIsAddUserPageVisible(!isAddUserPageVisible)}
        style={{ float: "right" }}
      >
        Add User
      </button>
     </Link>

       {isAddUserPageVisible ? (
        <AddUserPage addUser={addUser} />
      ) :

      
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th>Name</th>
              <th>Job Position</th>
              <th>Since</th>
              <th class="text-right">Salary</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Check if the users variable is defined and contains an array of data before calling the .map() method on it. */}
            {users?.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.userId}>
                  <td class="text-center">{index + 1}</td>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.role}</td>
                  {/* Add more user data fields as needed */}
                  <td>{user.since}</td>
                  <td class="text-right">{user.salary}</td>
                  <td class="td-actions text-right">
                    <button
                      type="button"
                      rel="tooltip"
                      class="btn btn-info btn-sm btn-icon"
                    >
                      <i class="tim-icons icon-single-02"></i>
                    </button>
                    <button
                      type="button"
                      rel="tooltip"
                      class="btn btn-success btn-sm btn-icon"
                    >
                      <i class="tim-icons icon-settings"></i>
                    </button>
                    <button
                      type="button"
                      rel="tooltip"
                      class="btn btn-danger btn-sm btn-icon"
                    >
                      <i class="tim-icons icon-simple-remove"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p>Loading users...</p>
            )}
          </tbody>
        </table>
}
      </div>
    </React.Fragment>
  );
}

export default SystemUsers;
