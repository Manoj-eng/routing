import React from "react";

const AllData = ({ firstName, lastName, email, contact }) => {
  return (
    <div>
      <div> User's First Name is:<strong>{firstName}</strong></div>
      <br />
      <div>User's Last Name is <strong>{lastName}</strong></div>
      <div>User's Email id is: <strong>{email} </strong> </div>
      <div>User's Contact Number is:<strong>{contact}</strong> </div>
    </div>
  );
};

export default AllData;
