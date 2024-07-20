import React from "react";
import { Button } from "@mui/material";

const UserProfile1 = () => {


  const myStyle = {
    backgroundColor: '#1e1e24',
    color: 'darkblue',
    fontSize: '18px'
  };

  const myStyle1 ={
    height:"370px",
    width:"700px",

  }
  return (
    <div style={myStyle} >
     
    <div style={styles.container}  >
      <div style={{position:"relative", display:"flex", marginBottom:"-130px", marginLeft:"-580px"}} >
    <img
          src="https://img.freepik.com/free-icon/user_318-233570.jpg?t=st=1691049834~exp=1691050434~hmac=cc691d69d5b4916b108a0fa1cac1d287bb90cc4942fdc9a1cbd121b150745ce5"
          height="150px" width="150px" 
          />
          </div>
      <div className="formContainer" style={styles.formContainer}>
        <div className="profilePic" style={styles.profilePic}>
          {/* Profile picture or other content */}
        </div>
        <form className="form" style={styles.form}>

        <div class="card">
  <div class="card-body">
    <form style={myStyle1} >
    <div class="row">
    <div class="col">
     {/* <h5>Edit Profile</h5> */}

        <label>First Name</label>
        <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
        <label>Last Name</label>
        <input type="text" class="form-control" placeholder="Last name"/>
    </div>
</div>

<div class="row">
    <div class="col">
        <label>User ID</label>
        <input type="text" class="form-control" placeholder="User ID"/>
    </div>
    <div class="col">
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email"/>
    </div>
    
</div>
<div class="row">
    <div class="col">
        <label>Designation</label>
        <input type="text" class="form-control" placeholder="Designation"/>
    </div>
    <div class="col">
        <label>Manager Name</label>
        <input type="text" class="form-control" placeholder="Manager Name"/>
    </div>
</div>
<div class="form-row">
<div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Conform Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
      </div>


    </form>
  </div>
</div>
    {/* <div className="row">
        <div className="column">
            <label htmlFor="name" style={{ marginRight: '15px' }}>FirstName:</label>
            <input type="text" id="name" name="name"style={{ marginRight: '15px' }} />
        </div>
        <div className="column">
            <label htmlFor="location"style={{ marginRight: '77px' }}>LastName:</label>
            <input type="text" id="location" name="location" style={{ marginRight: '15px' }} />
        </div>
    </div>
    <div className="row">
        <div className="column">
            <label htmlFor="age" style={{ marginRight: '43px' }}>UserId:</label>
            <input type="number" id="age" name="age" style={{ marginRight: '15px' }} />
        </div>
        <div className="column">
            <label htmlFor="email" style={{ marginRight: '109px' }} >Email:</label>
            <input type="email" id="email" name="email" style={{ marginRight: '15px' }} />
        </div>
    </div>
    <div className="row">
        <div className="column">
            <label htmlFor="designation" style={{ marginRight: '2px' }}>Designation:</label>
            <input type="text" id="designation" name="designation" style={{ marginRight: '15px' }} />
        </div>
        <div className="column">
            <label htmlFor="managerName" style={{ marginRight: '40px' }}>ManagerName:</label>
            <input type="text" id="managerName" name="managerName" />
        </div>
    </div>
    <div className="row">
        <div className="column">
            <label htmlFor="password" style={{ marginRight: '18px' }}>Password:</label>
            <input type="password" id="password" name="password" style={{ marginRight: '15px' }}/>
        </div>
        <div className="column">
            <label htmlFor="confirm-new-password" style={{ marginRight: '18px' }}>Confirm Password:</label>
            <input
                type="password"
                id="confirm-new-password"
                name="confirm-new-password"
            />
        </div>
    </div> */}
</form>

      </div>
      <div className="button-container" style={{ textAlign: "center", marginLeft:"400px", marginTop:"-40px" }}>
        {/* <Button variant="contained" disableElevation  style={{ marginRight: '15px' }} >
        Password
</Button> */}
        <button class="btn btn-primary btn-round">Password</button>


<button class="btn btn-success btn-round">Conform Password</button>
        {/* <button type="button" class="btn btn-warning" style={{ marginRight: '15px' }}>Conform Password</button> */}

        <button class="btn btn-warning btn-round">Submit</button>
       
{/*        
        <Button variant="contained" color="success">
        Submit
</Button> */}
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

 


  formContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "140px",
  },
  profilePic: {
    marginRight: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginRight:"-305px",
    marginTop:"-250px"
  },
};

export default UserProfile1;