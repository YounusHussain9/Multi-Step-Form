import React from "react";
import "./confirm.css";

const Confirm = ({ back, next, values, step }) => {
  const { firstname, lastname, email, ocupation, city, bio } = values;
  return (
    <div>
      <div className="info-container">
        <ul className="ul">
          <li>First name : {firstname}</li>
          <li>Last name : {lastname}</li>
          <li>Email : {email}</li>
          <li>Occupation : {ocupation}</li>
          <li>City : {city}</li>
          <li>Bio : {bio}</li>
        </ul>
      </div>

      <div className="confirm-button-container">
        <button
          onClick={() => {
            back(step - 1);
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            next(step + 1);
          }}
        >
          Confirm & Continue
        </button>
      </div>
    </div>
  );
};

export default Confirm;
