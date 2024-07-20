import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteUserForm = ({ userId }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      // Make an API call to delete the user
      const response = await fetch(`http://dev.vizart.traversetec.co/api/v1/user/delete/7`, {
        headers: {
        method: "DELETE",
        Authorization:" Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2ZiOTFmYmE0NmQ3OTZmMTFhMjcyNmMwMDA0YmUyNmQ3ZTliMDBiN2YzZTI5NDE5YjcyMjhlNDcwYTBlYjkwOGNlMmQzZjE3NTQzYjY0OGMiLCJpYXQiOjE2OTUzNTQwMzYuODAxNDM0LCJuYmYiOjE2OTUzNTQwMzYuODAxNDM3LCJleHAiOjE3MjY5NzY0MzYuNzk0MzYyLCJzdWIiOiIzMCIsInNjb3BlcyI6W119.HGltzSxCD_aYXiWvYn1WtpH4FmTQYVUoi6YJHuzvPJf-n5b0B1dTpnsuySdfGE0XDVKSwuPqIMOAt4Cs23stMDXDgMuDODW7UeUdcVr0JIQLcd4OpfZSwG06ecvoxFSB7y3dNvIi7C7FljMJOJsl4T0tDqryGSK4kOhRmZtf01dFaILt32EVIObZG_DUsnnyg0dZB6RRisimu790sap3dVJ0LgG4ssGy9QtRdW729KT6XEA03qMVjKqF1ZcZP7GH0FzH0GK677OTxSpg5ouIRSXBMMJPxOwlRKBZqokzHfqh6XHqc6lZDnR45Ol_DOcl6krJMZqi75gZ_wBp5it6HXDyZwFvAbGKtbSKPrOekh_2ddZsmOWpCHoWNbK3Al-goA8HzBIBUD9lpecOtZ2-M2PQNLB2fMn9p6G5jU5QaTlgxuS2sxAhQPnAzyMFNwEzfjdpKWanpVo3JOLcN99QSYZtnUntME8gm7quZHT6XSiELDoFj75yzSkXx3X39rDxxUn2EnJGA2Ep_q6l19lc1IkKlQckvQHAbDTtt6-muX2LPluV3_ejE-nEeivoRE4EMPgi6S950hXcP8C0VJ1kfl-CnBvoi7mE7pVrc4Af3pAE1Ey-fusboR0LD228KBOaXAVanesmRhjtYlie2mGx0Luh9mNvC4n9carPTAxzZiI",
        'Content-Type':'application/json',
       
    }
    });

      // Check the response status code
      if (response.status === 200) {
        
      } else if (response.status === 401){

      }
      
      else {
        
      }
    } catch (error) {
     
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <Button
        variant="danger"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete User
      </Button>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="delete-user-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" type="button" onClick={handleDelete} disabled={isDeleting}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUserForm;
