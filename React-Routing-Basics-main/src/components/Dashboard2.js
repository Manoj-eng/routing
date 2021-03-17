import { render } from "@testing-library/react";
import React from "react";
import AllData from "./AllData";

const Dashboard2 = ({ history, location }) => {
  console.log(location.state.fName.fName);

  const fullDetails = () => {

    history.push("./profile")
    render(
      <AllData
        firstName={location.state.fName.fName}
        lastName={location.state.lName.lName}
        email={location.state.email.email}
        contact={location.state.num.num}
      />
    );
  };

  
  
  return (
    <div className="dashdiv">
      <h1>Welcome  </h1>
      <h3>Click here to Check full Stats of User</h3>
      <button className="dashbtn" onClick={fullDetails}>User Information</button>
    </div>
  );
};

export default Dashboard2;
