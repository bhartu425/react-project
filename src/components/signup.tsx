import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "./login";
import { Button } from 'primereact/button';   
const Signup = () => {
  const [formValues, setFormValues] = useState({} as IUser);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.password) {
      alert("Please fill in all fields.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("Users") || "[]");
    const userExists = existingUsers.some(
      (user: IUser) => user.email === formValues.email
    );

    if (userExists) {
      alert("User already exists. Please login.");
      return;
    }

    existingUsers.push(formValues);
    localStorage.setItem("Users", JSON.stringify(existingUsers));

    setFormValues({
      name: "",
      email: "",
      password: "",
    });

    alert("Signup successful!");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Signup Page</h1>

      <div className="field grid">
        <label className="col-fixed" htmlFor="name">Name</label>
        <div className="col" >
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={inputHandler}
          placeholder="Enter your name"
        />
        </div>
      </div>

      <div className="field grid">
        <label className="col-fixed"  htmlFor="email">Email</label>
        <div className="col" >
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={inputHandler}
          placeholder="Enter your email"
        />
        </div>
      </div>

      <div className="field grid">
        <label className="col-fixed" htmlFor="password">Password</label>
        <div className="col" >
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={inputHandler}
          placeholder="Enter your password"
        />
        </div>
      </div>

      <Button label="submit"/>

      <div>
        <label>Already have an account?</label>
        <a href="/">Login</a>
      </div>
    </form>
  );
};

export default Signup;
