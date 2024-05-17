import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import Google from "./Google.webp";
import India from "./INDIA.png";
import "./Login.css";
import LoginImage from "./LoginPageImage.webp";
import Facebook from "./facebook.webp";
import { Link, useNavigate } from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.trim() === "") {
      setShowErrorMessage(true);
      return;
    } else {
      navigate("/login/email");
    }
  };

  return (
    <>
      <section className="loginContainer">
        <div className="loginRightDiv">
          <h2 className="loginMainText">Welcome to the world of Bewakoof®!</h2>
          <div className="loginImageBox">
            <img
              className="loginImage"
              src={LoginImage}
              alt="Login to Start Shopping"
            />
          </div>
        </div>

        {/* <div className="loginLeftDiv">
          <div className="loginTextContainer">
            <h3 className="">Log in / Sign up </h3>
            <p className="loginText">
              for Latest trends, exciting offers and everything Bewakoof®!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="loginNumberForm"
            name="loginForm"
          >
            <div className="mobileNumberInputContainer">
              <div
                className="mobileNumberInputBox"
                style={{
                  border: showErrorMessage
                    ? "0.1px solid red"
                    : "0.1px solid #878787",
                }}
              >
                <div className="mobileImageBox">
                  <img className="indiaImg" src={India} alt="India" />
                  <p className="countryCode">+91</p>
                </div>

                <input
                  type="tel"
                  className="phoneNumberInput"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Mobile Number"
                  onChange={handlePhoneNumberChange}
                  maxLength={10}
                  onClick={() => {
                    setShowErrorMessage(false);
                  }}
                />
              </div>

              {showErrorMessage && (
                <div className="error-message">Mobile Number is required</div>
              )}
            </div>

            <button className="submitloginFormButton" type="submit">
              CONTINUE
            </button>
          </form>

          <div className="loginSignupDivider">
            <span>OR</span>
          </div>

          <div className="socialContainerSignUp">
            <Link to="/login/email">
              <button className="loginEmailButton">
                <MailOutlineSharpIcon
                  sx={{ fontSize: "1rem", color: "black" }}
                />
                CONTINUE WITH EMAIL
              </button>
            </Link>

            <div className="loginSocialMediaButtonBox">
              <Link to="/login/email">
                <button className="loginSocialMediaButton">
                  <img
                    className="LoginSocialMedialogo"
                    src={Google}
                    alt="Google Logo"
                  />
                  GOOGLE
                </button>
              </Link>
              <Link to="/login/email">
                <button className="loginSocialMediaButton">
                  <img
                    className="LoginSocialMedialogo"
                    src={Facebook}
                    alt="Google Logo"
                  />
                  FACEBOOK
                </button>
              </Link>
            </div>

            <p className="loginTermsConditionsText">
              By creating an account or logging in, you agree with Bewakoof®'s
              Terms and Conditions and Privacy Policy.
            </p>
          </div>
        </div> */}

        <div className="loginLeftDiv2">
          <LoginPage />
        </div>
      </section>
    </>
  );
}
