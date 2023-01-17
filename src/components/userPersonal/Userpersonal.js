import React from "react";
import DenseAppBar from "../../material-ui-components/Appbar";
import "./userpersonal.css";

const Userpersonal = ({ back, step, next, onChange, values }) => {
  const { ocupation, city, bio } = values;
  return (
    <>
      <div className="uf-input-container">
        <input
          placeholder="Enter Occupation.."
          name="ocupation"
          onChange={onChange}
          defaultValue={ocupation}
        />

        <input
          placeholder="Enter City.."
          name="city"
          onChange={onChange}
          defaultValue={city}
        />

        <input
          placeholder="Enter Bio.."
          name="bio"
          onChange={onChange}
          defaultValue={bio}
        />

        <div className="button-container">
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
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Userpersonal;
