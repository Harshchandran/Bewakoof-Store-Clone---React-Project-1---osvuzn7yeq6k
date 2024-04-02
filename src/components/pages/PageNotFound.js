import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <>
      <div className="pageNotFoundMainContainer">
        <div className="errorContainerpageNotFound">
          <h1 className="headingPageNotFound">404</h1>
          <p className="friendPageNOtFound1">OH SNAP !</p>
        </div>

        <div className="pageNotFoundRedirectionContainer">
          <div>
            <span className="friendPageNOtFound2">
              The page you are looking for doesn't exist.
            </span>
            <hr></hr>
            <span className="paraPageNotFound">
              Maybe you’ll find it in one of these categories:
            </span>
          </div>

          <div className="NavigationsPageNotFound">
            <div className="pageNotFoundMenWomenNavBox">
              <div className="pageNotFoundMenWomenNavHeading">
                <span>Men</span>
              </div>

              <div className="pageNotFoundMenWomenNavLinksContainer">
                <div className="pageNotFoundMenWomenNavLinksBox">
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        subCategory: "shirt",
                        gender: "Men",
                      },
                    }}
                  >
                    Topwear
                  </Link>
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        sellerTag: "new arrival",
                        gender: "Men",
                      },
                    }}
                  >
                    NewArrivals
                  </Link>
                </div>
                <div className="pageNotFoundMenWomenNavLinksBox">
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        subCategory: "pyjamas",
                        gender: "Men",
                      },
                    }}
                  >
                    Bottomwear
                  </Link>
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        sellerTag: "best seller",
                        gender: "Men",
                      },
                    }}
                  >
                    Bestsellers
                  </Link>
                </div>
              </div>
            </div>

            <div className="pageNotFoundMenWomenNavBox">
              <div className="pageNotFoundMenWomenNavHeading">
                <span>Women</span>
              </div>
              <div className="pageNotFoundMenWomenNavLinksContainer">
                <div className="pageNotFoundMenWomenNavLinksBox">
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        subCategory: "shirt",
                        gender: "Women",
                      },
                    }}
                  >
                    Topwear
                  </Link>
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        sellerTag: "best seller",
                        gender: "Women",
                      },
                    }}
                  >
                    Bestsellers
                  </Link>
                </div>
                <div className="pageNotFoundMenWomenNavLinksBox">
                  <Link
                    to="/productPage"
                    state={{
                      filter: {
                        subCategory: "joggers",
                        gender: "Women",
                      },
                    }}
                  >
                    Bottomwear
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
