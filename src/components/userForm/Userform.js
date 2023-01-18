import DenseAppBar from "../../material-ui-components/Appbar";
import React, { useState } from "react";
import Userdetails from "../userDetail/Userdetails";
import Confirm from "../confirm/Confirm";
import Success from "../success/Success";
import Userpersonal from "../userPersonal/Userpersonal";
import "./userForm.css";

const Initial_Value = [
  {
    firstname: "",
    lastname: "",
    email: "",
    ocupation: "",
    city: "",
    bio: "",
  },
];

const Userform = () => {
  const [userInfo, setUserInfo] = useState(Initial_Value);
  const [isError , setIsError] = useState('')
  const { firstname, lastname, email, ocupation, city, bio } = userInfo;
  const values = { firstname, lastname, email, ocupation, city, bio };
  const [step, setStep] = useState(0);

  const Next = (value) => {
   if(!firstname || !lastname || !email ){
  setIsError("⚠ Please ! Fill all inputs")
  }else{
    setIsError('')
    setStep(value);     
  } 

  };


  const Prev = (value) => {
      setStep(value);
  };

  const onHandleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  console.log(userInfo);
  return (
    <>
      {(() => {
        switch (step) {
          case 0:
            return (
              <>
                <DenseAppBar title="User Form" />
                <Userdetails
                  next={Next}
                  step={step}
                  back={Prev}
                  onChange={onHandleChange}
                  values={values}
                  error ={isError}
    />
              </>
            );

          case 1:
            return (
              <>
                <DenseAppBar title="User Detail" />

                <Userpersonal
                  step={step}
                  next={Next}
                  back={Prev}
                  values={values}
                  onChange={onHandleChange}
                />
              </>
            );

          case 2:
            return (
              <>
                <DenseAppBar title="Confirm your Data ⚠" />
                <Confirm step={step} next={Next} back={Prev} values={values} />
              </>
            );

          case 3:
            return (
              <>
                <DenseAppBar title="Success" bg="green" />
                <Success />
              </>
            );

          default:
            return null;
        }
      })()}
    </>
  );
};

export default Userform;
