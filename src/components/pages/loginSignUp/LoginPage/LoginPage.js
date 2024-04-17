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

  const navigateRouteLogin = () => {
    // Navigate("/");
    window.location.href = "/";
  };

  const LoginApi = "https://academics.newtonschool.co/api/v1/user/login";

  const SignUpApi = "https://academics.newtonschool.co/api/v1/user/signup";

  const projectId = "f105bi07c590";

  const [action, setAction] = useState("Log in to your account");

  const handleLoginSubmit = async () => {
    // e.preventDefault();
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

  const handleSignUpSubmit = async () => {
    // e.preventDefault();
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

            <div className="inputs">
              {action === "Log in to your account" ? (
                <div> </div>
              ) : (
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    value={SignUpValues.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
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
                />
              </div>

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
            </div>

            {/* {action === "Sign Up" ? null : (
              <div>
                <div className="forgot-password">
                  Lost Password? <span>Click Here!</span>
                </div>
              </div>
            )} */}

            <div className="submit-container">
              {action === "Sign Up" ? (
                <button
                  className="submit"
                  type="submit"
                  onClick={() => {
                    handleSignUpSubmit();
                  }}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  className="submit"
                  type="submit "
                  onClick={() => {
                    handleLoginSubmit();
                  }}
                >
                  Login
                </button>
              )}
            </div>

            {action === "Sign Up" ? (
              <div className="LoginSinUpToggle">
                <p>Already have an Account ? </p>
                <button
                  onClick={() => {
                    setAction("Log in to your account");
                  }}
                >
                  {" "}
                  Click Here to Login!
                </button>
              </div>
            ) : (
              <div>
                <div className="LoginSinUpToggle">
                  <p>New User ?</p>
                  <button
                    onClick={() => {
                      setAction("Sign Up");
                    }}
                    type="submit"
                  >
                    Click Here to SignUp!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
