import { Button } from "primereact/button";
import { ChangeEvent, FormEvent, useState } from "react";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const [loginValue, setLoginValue] = useState({ username: "", password: "" });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("Users") || "[]");

    const user = userData.find(
      (user: IUser) =>
        user.email === loginValue.username &&
        user.password === loginValue.password
    );

    if (!user) {
      console.log("Login failed");
    } else {
      console.log("Login successful");
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <h1>Login Form</h1>
      <div className="field grid">
        <label className="col-fixed" htmlFor="username">
          Username
        </label>
        <div className="col">
          <input
            name="username"
            type="text"
            onChange={inputHandler}
            value={loginValue.username}
            placeholder="Enter your username"
          />
        </div>
      </div>

      <div className="field grid">
        <label className="col-fixed" htmlFor="username">
          Password
        </label>
        <div className="col">
        <input
          name="password"
          type="password"
          onChange={inputHandler}
          value={loginValue.password}
          placeholder="Enter your password"
        />
        </div>
      </div>

      <Button label="Login" />

      <div>
        <label>Don't have an account?</label>
        <a href="/signup">Sign Up</a>
      </div>
    </form>
  );
};

export default Login;
