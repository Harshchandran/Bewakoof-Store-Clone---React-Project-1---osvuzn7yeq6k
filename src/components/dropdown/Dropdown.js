import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ show, setShow }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const Api =
      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories";

    const projectId = "f104bi07c490";

    try {
      getCategoriesData(Api);

      async function getCategoriesData(api) {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            projectId: projectId,
          },
        });

        const data = await response.json();

        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  // const handleDropdown = () => {
  //     setShow(true);
  // }

  const handleDropdownClose = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className="dropdown-content"
        // onMouseOver={handleDropdown}
        onMouseLeave={handleDropdownClose}
        onMouseEnter={() => setShow(true)}
      >
        <ul className="navigationBarDropdown">
          {categories.map((individualData, index) => (
            <li key={index}>
              <Link
                to="/productPage"
                state={{
                  filter: {
                    subCategory: individualData,
                  },
                }}
              >
                {individualData}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
