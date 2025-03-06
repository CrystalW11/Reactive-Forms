/** @format */
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const { userList, setUserList } = props; //
  const [userList, setUserList] = useState([]);

  const validateForm = () => {
    let newErrors = {};

    if (!firstName || firstName.length < 3) {
      newErrors = {
        ...newErrors,
        firstName: "First Name must be at least 3 characters!",
      };
    }

    if (!lastName || lastName.length < 3) {
      newErrors = {
        ...newErrors,
        lastName: "Last Name must be at least 3 characters!",
      };
    }

    if (!email || email.length < 8) {
      newErrors = {
        ...newErrors,
        email: "Email must be at least 8 characters!",
      };
    }

    if (!password || password.length < 3) {
      newErrors = {
        ...newErrors,
        password: "Password must be at least 3 characters!",
      };
    }

    if (confirmPassword !== password) {
      newErrors = {
        ...newErrors,
        confirmPassword: "Passwords do not match!",
      };
    }

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Form is invalid. Please correct errors.");
      return;
    }

    console.log("Form is valid. Submitting data...");

    const userObject = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    setUserList([...userList, userObject]);

    // Clear form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    console.log("Submitted user object:", userObject);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <label className="label-name">First Name:</label>
          <input
            className="label"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <div className="errors">
            {firstName && firstName.length < 3 ? (
              <p className="errors">
                First Name must be at least 3 characters!
              </p>
            ) : (
              "" // this is also null - you can use either.
            )}
          </div>
          <label className="label-name">Last Name:</label>
          <input
            className="label"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <div className="errors">
            {lastName && lastName.length < 3 ? (
              <p className="p">Last Name must be at least 3 characters!</p>
            ) : (
              "" // this is also null - you can use either.
            )}
          </div>
          <label className="label-name">Email:</label>
          <input
            className="label"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="errors">
            {email && email.length < 8 ? (
              <p className="p">Email must be at least 8 characters!</p>
            ) : null}
          </div>
          <label className="label-name">Password:</label>
          <input
            className="label"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="errors">
            {password && password.length < 3 ? (
              <p className="p">Password must be at least 3 characters!</p>
            ) : null}
          </div>
          <label className="label-name">Confirm Password:</label>
          <input
            className="label"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={userList.confirmPassword}
          />
          <div className="errors">
            {confirmPassword &&
            confirmPassword.length > 0 &&
            confirmPassword !== password ? (
              <p className="p">
                Passwords do not match! Confirm Password must be at least 3
                characters!
              </p>
            ) : null}
          </div>
          <br></br>
          <button className="btn btn-primary" type="submit">
            Add User
          </button>
        </form>
      </div>
      <div className="container">
        <hr></hr>
        <h1>User</h1>
        {userList.map((user, index) => (
          // eslint-disable-next-line react/jsx-key
          <div key={index}>
            <p className="user ">
              Name: {user.firstName} {user.lastName}
              <br></br>Email: {user.email}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
