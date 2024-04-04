import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoaderPage } from "../pages/pageLoader/LoaderPage";
import { FiltersSection } from "./FiltersSection";
import "./IndividualCategoryProducts.css";
import { SortBy } from "./SortBy";

export const IndividualCategoryProducts = () => {
  const [categoryData, setCategoryData] = useState([]);

  const [filterApplied, setFiltersApplied] = useState({});

  const [sortByType, setSortByType] = useState(false);

  const location = useLocation();

  const filterData = location.state && location.state.filter;

  const [notFound, setNotFound] = useState(false);

  const [notDataFound, setNotDataFound] = useState(false);

  const [filterClearButton, setFilterClearButton] = useState(false);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (filterData) {
      const categoryDataApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${encodeURIComponent(
        JSON.stringify(filterData)
      )}`;

      const projectId = "f104bi07c490";

      async function getCategoryData(api) {
        try {
          const response = await fetch(api, {
            method: "GET",
            headers: {
              projectId: projectId,
            },
          });

          const data = await response.json();

          if (data.status === "success") {
            setNotDataFound(false);
            console.log(data.data);
            setLoader(false);
          } else if (data.status === "fail") {
            setNotDataFound(true);
            setLoader(false);
          }

          setCategoryData(data.data);
        } catch (error) {
          console.error("Error fetching Category Data:", error);
        }
      }

      getCategoryData(categoryDataApi);
    }
  }, [filterData]);

  const projectId = "f104bi07c490";

  const UpdateFiltersOnData = async () => {
    const mergedFilters = { ...filterData, ...filterApplied };

    const UpdateFilterUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=${encodeURIComponent(
      JSON.stringify(mergedFilters)
    )}`;

    try {
      const response = await fetch(UpdateFilterUrl, {
        method: "GET",
        headers: {
          projectId: projectId,
        },
      });

      const data = await response.json();

      setCategoryData(data.data);
      setLoader(false);
      if (data.status === "success") {
        setNotFound(false);
        // setLoader(false);
      } else if (data.status === "fail") {
        setNotFound(true);
        // setLoader(false);
      }
    } catch (error) {
      console.error("Error updating Filter Data:", error);
    }
  };

  const handleClearAllFilter = () => {
    setFiltersApplied({});
    setFilterClearButton(false);
    UpdateFiltersOnData();
  };

  const sortByPriceLowToHigh = () => {
    const sorted = [...categoryData].sort((a, b) => a.price - b.price);
    setCategoryData(sorted);
  };

  const sortByPriceHighToLow = () => {
    const sorted = [...categoryData].sort((a, b) => b.price - a.price);
    setCategoryData(sorted);
  };

  return (
    <>
      <section className="individualCategorySection">
        <LoaderPage loader={loader} />
        <div className="individualCategoryContainer">
          <div className="individualCategoryLeftContainer">
            <div className="individualCategoryFilterSectionHeaders">
              <h6 className="individualCategoryFilterHeading">FILTERS</h6>
              {filterClearButton && (
                <h6 style={{ color: "#42a2a2" }} onClick={handleClearAllFilter}>
                  Clear
                </h6>
              )}
            </div>
            <FiltersSection
              setFiltersApplied={setFiltersApplied}
              filterApplied={filterApplied}
              UpdateFiltersOnData={UpdateFiltersOnData}
              setSortByType={setSortByType}
              sortByType={sortByType}
              sortByPriceHighToLow={sortByPriceHighToLow}
              sortByPriceLowToHigh={sortByPriceLowToHigh}
              setFilterClearButton={setFilterClearButton}
            />
          </div>
          <div className="individualCategoryRightContainer">
            <div className="individualCategorySortingBox">
              <SortBy
                sortByPriceLowToHigh={sortByPriceLowToHigh}
                sortByPriceHighToLow={sortByPriceHighToLow}
                setFiltersApplied={setFiltersApplied}
              />
            </div>
            {notFound || notDataFound ? (
              <div className="individualCategoryDataNotFoundContainer">
                <div className="individualCategoryDataNotFoundBox">
                  <h2 className="individualCategoryDataNotFound">
                    {notDataFound
                      ? "Sorry, No Data is Found!"
                      : "Sorry, We couldn’t Find any matches!"}
                  </h2>
                  {notDataFound ? (
                    <Link to="/">
                      <button
                        className="individualCategoryDataNotFoundClearButton"
                        onClick={() => setNotDataFound(false)}
                      >
                        {console.log("notDataFound", notDataFound)}
                        Continue Shopping
                      </button>
                    </Link>
                  ) : (
                    filterClearButton && (
                      <button
                        className="individualCategoryDataNotFoundClearButton"
                        onClick={handleClearAllFilter}
                      >
                        {console.log("notFound", notFound)}
                        Clear
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="individualCategoryDataContainer01">
                {categoryData?.map((data, index) => (
                  <Link
                    to={`/productCard/${data._id}`}
                    className="individualCategoryDataBox03"
                    key={index}
                    state={{ id: data._id }}
                  >
                    <div className="individualCategoryDataBox02" key={index}>
                      <img
                        className="individualCategorySingleProductImage"
                        src={data.displayImage}
                        alt={`Image ${index}`}
                      />
                      <div className="individualCategorySingleProductBox">
                        <div className="individualCategorySingleProductDetail">
                          <p className="individualCategorySingleProductSellerName">
                            {data.seller.name}
                          </p>
                          <p className="individualCategorySingleProductProductName">
                            {data.name}
                          </p>
                        </div>
                        {/* <div className="individualCategorySingleProductProductFavIconBox">
                        <FavoriteBorderRoundedIcon />
                      </div> */}
                      </div>
                      <div className="individualCategorySingleProductPrice">
                        <CurrencyRupeeSharpIcon sx={{ fontSize: "0.675rem" }} />
                        <p>{data.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
