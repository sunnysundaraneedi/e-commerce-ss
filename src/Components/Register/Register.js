import "./Register.css";
import { useState } from "react";
import { db } from "../../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setInputFields((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        ...inputFields,
      });
      navigate("/");
    } catch (error) {
      console.log("Something went wrong : ", error);
    }
  };
  return (
    <div className="container">
      <div className="forms">
        <div className="form login">
          <span className="title">Register</span>
          <form onSubmit={submitHandler}>
            {/*Inputs*/}
            <div className="input-field">
              <input
                value={inputFields.fullname}
                onChange={changeHandler}
                name="fullname"
                type="text"
                placeholder="Enter your name"
                className="uil uil-user"
              />
              <i className="uil uil-user icon"></i>
            </div>
            <div className="input-field">
              <input
                value={inputFields.email}
                onChange={changeHandler}
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <i className="uil uil-envelope icon"></i>
            </div>

            <div className="input-field">
              <input
                value={inputFields.password}
                onChange={changeHandler}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <i className="uil uil-padlock icon"></i>
            </div>

            <button className="button">Register</button>
          </form>
          <div className="login-signup">
            <span className="text">Already a member?</span>
            <Link to="/">
              <span className="text signup-text">Login Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
