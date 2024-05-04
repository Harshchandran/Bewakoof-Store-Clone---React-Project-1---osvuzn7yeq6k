import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
  const [Login, setLogin] = useState([]);
  const [signUp, setSignUp] = useState([]);

  const Navigate = useNavigate();

  const [LoginValues, setLoginValues] = useState({
    email: "",
    password: "",
    appType: "ecommerce",
  });

  const [SignUpValues, setSignUpValues] = useState({
    name: "",
    email: "",
    password: "",
    appType: "ecommerce",
  });

  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const navigateRouteLogin = () => {
    // Navigate("/");
    window.location.href = "/";
  };

  const LoginApi = "https://academics.newtonschool.co/api/v1/user/login";

  const SignUpApi = "https://academics.newtonschool.co/api/v1/user/signup";

  const projectId = "f105bi07c590";

  const [action, setAction] = useState("Log in to your account");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(LoginApi, {
        method: "Post",
        headers: {
          projectId: projectId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginValues),
      });

      const data = await response.json();

      console.log(data);

      if (
        data.status === "fail" &&
        data.message === "Incorrect EmailId or Password"
      ) {
        alert("Incorrect EmailId or Password");
      }

      if (data.status === "success") {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("userData", JSON.stringify(data.data));
        navigateRouteLogin();
      }

      setLogin(data);

      setLoginValues({
        email: "",
        password: "",
        appType: "ecommerce",
      });
    } catch (error) {
      console.error("Error fetching Login Data:", error);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SignUpApi, {
        method: "Post",
        headers: {
          projectId: projectId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignUpValues),
      });

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("userData", JSON.stringify(data.data.user));
        navigateRouteLogin();
      }

      setSignUp(data);

      setSignUpValues({
        name: "",
        email: "",
        password: "",
        appType: "ecommerce",
      });
    } catch (error) {
      console.error("Error fetching SignUp:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let localErrors = { ...errors };

    if (name === "email") {
      let emailRegex = new RegExp("[a-z0-9._%+\\-]+@[a-z0-9.-]+\\.[a-z]{2,}$");
      localErrors.email = emailRegex.test(value)
        ? ""
        : "Please enter a valid email address.";
    }

    if (name === "password") {
      if (value.length < 4 || value.length > 60) {
        localErrors.password =
          "Your password must contain between 4 and 60 characters.";
      } else {
        localErrors.password = "";
      }
    }

    if (name === "name" && action === "Log in to your account") {
      localErrors.name =
        value.length >= 4 ? "" : "Name must be at least 4 characters long.";
    }

    setErrors(localErrors);

    if (action === "Log in to your account") {
      setLoginValues({
        ...LoginValues,
        [name]: value,
      });
    } else {
      setSignUpValues({
        ...SignUpValues,
        [name]: value,
      });
    }
  };

  return (
    <>
      <section className="loginPage">
        <div className="loginForm">
          <div className="container">
            <div className="loginFormHeader">
              <h4 className="text">Log in / Sign up</h4>
              <p className="subText">
                for Latest trends, exciting offers and everything Bewakoof®!
              </p>
            </div>

            <form
              onSubmit={
                action === "Log in to your account"
                  ? handleLoginSubmit
                  : handleSignUpSubmit
              }
            >
              <div className="inputs">
                {action === "Log in to your account" ? (
                  <div> </div>
                ) : (
                  <>
                    <div className="input">
                      <input
                        type="text"
                        name="name"
                        value={SignUpValues.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        minLength={4}
                        maxLength={50}
                      />
                    </div>
                    <div className="error">{errors.name}</div>
                  </>
                )}

                <div className="input">
                  <input
                    type="email"
                    name="email"
                    value={
                      action === "Log in to your account"
                        ? LoginValues.email
                        : SignUpValues.email
                    }
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="error">{errors.email}</div>

                <div className="input">
                  <input
                    type="password"
                    name="password"
                    value={
                      action === "Log in to your account"
                        ? LoginValues.password
                        : SignUpValues.password
                    }
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="error">{errors.password}</div>
              </div>

              {/* {action === "Sign Up" ? null : (
              <div>
                <div className="forgot-password">
                  Lost Password? <span>Click Here!</span>
                </div>
              </div>
            )} */}

              <div className="submit-container">
                <button className="submit" type="submit">
                  {action === "Sign Up" ? "Sign Up" : "Login"}
                </button>
              </div>

              {action === "Sign Up" ? (
                <div className="LoginSinUpToggle">
                  <p>Already have an Account ? </p>
                  <button
                    onClick={() => {
                      setAction("Log in to your account");
                    }}
                  >
                    Click Here to Login!
                  </button>
                </div>
              ) : (
                <div>
                  <div className="LoginSinUpToggle">
                    <p>New User ?</p>
                    <button
                      type="button"
                      onClick={() => {
                        setAction("Sign Up");
                      }}
                    >
                      Click Here to SignUp!
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
