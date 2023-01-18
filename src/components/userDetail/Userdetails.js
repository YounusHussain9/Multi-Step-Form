import React from "react";

const Userdetails = ({ next, step, onChange, values , error }) => {
  const { firstname, lastname, email } = values;
  return (
    <div className="uf-input-container">
      <input
        placeholder="Enter Firstname.."
        name="firstname"
        onChange={onChange}
        defaultValue={firstname}
      />

      <input
        placeholder="Enter Lastname.."
        name="lastname"
        onChange={onChange}
        defaultValue={lastname}
      />

      <input
        placeholder="Enter Email.."
        name="email"
        onChange={onChange}
        defaultValue={email}
      />
<h3 style={{textAlign:'center'}}>{error}</h3>
      <div className="button-container">
        <button
          onClick={() => {
            next(step + 1);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Userdetails;
