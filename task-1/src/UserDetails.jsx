import React, { useState } from "react";

export const UserDetails = () => {
  let [user, setUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    email: "",
    gender: "",
    city: "",
    pincode: "",
  });

  const [allUsers, setAllUsers] = useState([]);
  const [index, setIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!user.userName.trim()) {
      newErrors.userName = "User Name is required";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    const mobileRegex = /^\d{10}$/;
    if (!user.mobile.match(mobileRegex)) {
      newErrors.mobile = "Invalid mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email.match(emailRegex)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!user.city.trim()) {
      newErrors.city = "City is required";
    }

    const pincodeRegex = /^\d{6}$/;
    if (!user.pincode.match(pincodeRegex)) {
      newErrors.pincode = "Invalid pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const clearForm = () => {
    setUser({
      userName: "",
      password: "",
      confirmPassword: "",
      mobile: "",
      email: "",
      gender: "",
      city: "",
      pincode: "",
    });
  };
  const submitData = () => {
    // console.log(user);
    if (validateForm()) {
      let newAllUsers = [...allUsers];
      newAllUsers.push(user);
      setAllUsers(newAllUsers);
      clearForm();
    }
  };

  const editUser = (usr, i) => {
    setUser(usr);
    setIndex(i);
    setIsEdit(true);
  };
  const updateUser = () => {
    let newUpdates = [...allUsers];
    newUpdates[index] = { ...user };
    setAllUsers(newUpdates);
    setIsEdit(false);
    clearForm();
  };

  const deleteUser = (usr, i) => {
    // console.log("dele.....");
    let deletedUsers = allUsers.filter((del) => {
      return del.userName !== usr.userName;
    });
    setAllUsers(deletedUsers);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%" }}>
        <form className="myForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={user.userName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.userName && (
              <div className="text-danger">{errors.userName}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.confirmPassword && (
              <div className="text-danger">{errors.confirmPassword}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={user.mobile}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.mobile && (
              <div className="text-danger">{errors.mobile}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Emial
            </label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value={"Male"}
              checked={user.gender == "Male"}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value={"Female"}
              checked={user.gender == "Female"}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              value={user.city}
              name="city"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.city && <div className="text-danger">{errors.city}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Pincode
            </label>
            <input
              type="tel"
              className="form-control"
              value={user.pincode}
              name="pincode"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.pincode && (
              <div className="text-danger">{errors.pincode}</div>
            )}
          </div>
          {isEdit ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={updateUser}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitData}
            >
              Submit
            </button>
          )}
        </form>
      </div>

      <div style={{ width: "65%", marginLeft: "30px" }}>
        <table className="table myTable">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((usr, i) => {
                return (
                  <tr key={i}>
                    <td>{usr.userName}</td>
                    <td>{usr.password}</td>
                    <td>{usr.confirmPassword}</td>
                    <td>{usr.mobile}</td>
                    <td>{usr.email}</td>
                    <td>{usr.gender}</td>
                    <td>{usr.city}</td>
                    <td>{usr.pincode}</td>
                    <td>
                      <button
                        onClick={() => {
                          editUser(usr, i);
                        }}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUser(usr, i);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
