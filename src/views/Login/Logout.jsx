import React, { useState } from "react";
import axios from "axios";

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [bearerToken,setBearerToken] = useState(localStorage.getItem('token'))

  const handleLogout = ()=>{
    fetch("http://dev.vizart.traversetec.co/api/v1/user/logout",{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        authorization:`Bearer ${bearerToken}`
      }
    })
    .then(res=>{
      if(res.status===200){
        localStorage.removeItem('token');
        window.location.href = "/login";
      }
    })
    .catch(err=>{
      console.log('Error:',err)
    })
}

  return (
    <div>
      {isLoggedOut ? (
        <div>
          <h2>Logout Successful</h2>
          <p>You have been successfully logged out.</p>
        </div>
      ) : (
        <div>
          <h2>Logout</h2>
          <p>Are you sure you want to log out?</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
