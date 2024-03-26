import React, { useEffect, useState } from "react";
import "./TestApiData.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const TestApiData = () => {
  //   const [count, setCount] = useState(0);

  //   const [ApiData, setApiData] = useState([]);

  //   const [subCategory, setsubCategory] = useState("");

  //   const [subCategoryDataArray, setsubCategoryDataArray] = useState([]);

  //   useEffect(() => {
  //     const Api =
  //       "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories";

  //     const projectId = "f104bi07c490";

  //     async function getBestSellersSelectionData(api) {
  //       try {
  //         const response = await fetch(api, {
  //           method: "GET",
  //           headers: {
  //             projectId: projectId,
  //           },
  //         });

  //         const data = await response.json();

  //         console.log(data);
  //         setApiData(data.data);
  //       } catch (error) {
  //         console.error("Error fetching Best Sellers Selection:", error);
  //       }
  //     }

  //     getBestSellersSelectionData(Api);
  //   }, []);

  //   useEffect(() => {
  //     if (subCategory !== "") {
  //       const subCategoryApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"${subCategory}"}`;

  //       const projectId = "f104bi07c490";

  //       const getSubCategoriesData = async (api) => {
  //         // console.log(count)

  //         <img
  //           style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-out;background-color: hsl(0, 0%, 90%);"
  //           src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-common-cargo60off-ezgif-com-optimize-1705467921.gif"
  //           width="720"
  //           height="720"
  //         ></img>;

  //         try {
  //           const response = await fetch(api, {
  //             method: "GET",
  //             headers: {
  //               projectId: projectId,
  //             },
  //           });

  //           const data = await response.json();
  //           console.log(data.data);

  //           setsubCategoryDataArray(data.data);
  //         } catch (error) {
  //           console.error("Error fetching SubCategory Data:", error);
  //         }
  //       };

  //       getSubCategoriesData(subCategoryApi);
  //       //    setCount(count+1);
  //     }
  //   }, [subCategory]);

  //   // getSubCategoriesData(subCategoryApi);

  //   useEffect(() => {
  //     const AvailableCategoriesApi =
  //       "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products";

  //     const projectId = "f104bi07c490";

  //     const getAvailableCategoriesData = async (api) => {
  //       // console.log(count)

  //       <img
  //         style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-out;background-color: hsl(0, 0%, 90%);"
  //         src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-common-cargo60off-ezgif-com-optimize-1705467921.gif"
  //         width="720"
  //         height="720"
  //       ></img>;

  //       try {
  //         const response = await fetch(api, {
  //           method: "GET",
  //           headers: {
  //             projectId: projectId,
  //           },
  //         });

  //         const data = await response.json();
  //         console.log(data);

  //         // setsubCategoryDataArray(data.data);
  //       } catch (error) {
  //         console.error("Error fetching SubCategory Data:", error);
  //       }
  //     };

  //     getAvailableCategoriesData(AvailableCategoriesApi);
  //     //    setCount(count+1);
  //   }, []);

  //   const handlesubCategoryClick = (e) => {
  //     setsubCategory(e.target.textContent);
  //     console.log(subCategory);
  //   };

  //   return (
  //     <>
  //       <div>TestApiData</div>
  //       <div
  //         className="subCategoryData"
  //         style={{ margin: "1rem", textTransform: "capitalize", fontWeight: 500 }}
  //       >
  //         {ApiData.map((data, index) => (
  //           <div key={index} onClick={handlesubCategoryClick}>
  //             {data}
  //           </div>
  //         ))}
  //       </div>

  //       <section>
  //         {subCategoryDataArray.length > 0 && (
  //           <div className="subCategoriesSingleProductsContainer">
  //             {subCategoryDataArray.map((data, index) => (
  //               <div className="subCategoriesSingleProductsBox" key={index}>
  //                 <img
  //                   className="subCategoriesSingleProduct"
  //                   src={data.displayImage}
  //                   alt={`Image ${index}`}
  //                 />
  //                 <p>{data.subCategory}</p>
  //                 <p>{data.name}</p>
  //               </div>
  //             ))}
  //           </div>
  //         )}
  //       </section>
  //     </>
  //   );
  // };

  // import * as React from "react";

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
