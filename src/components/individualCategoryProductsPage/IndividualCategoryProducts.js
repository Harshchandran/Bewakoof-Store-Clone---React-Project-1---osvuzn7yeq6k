import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoaderPage } from "../pages/pageLoader/LoaderPage";
import { FiltersSection } from "./FiltersSection";
import "./IndividualCategoryProducts.css";
import { SortBy } from "./SortBy";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export const IndividualCategoryProducts = () => {
  const [categoryData, setCategoryData] = useState([]);

  const [filterApplied, setFiltersApplied] = useState({});

  const [sortByType, setSortByType] = useState(false);

  const location = useLocation();

  const filterData = location.state && location.state.filter;

  const searchData = location.state && location.state.search;

  const [notFound, setNotFound] = useState(false);

  const [notDataFound, setNotDataFound] = useState(false);

  const [filterClearButton, setFilterClearButton] = useState(false);

  const [loader, setLoader] = useState(true);

  const [wishlistData, setWishlistData] = useState([]);

  const [token, setToken] = useState("");

  const getWishlistData = async (JWTToken) => {
    const GetWishlistItemsApi =
      "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";

    if (token || JWTToken) {
      try {
        const response = await fetch(GetWishlistItemsApi, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token || JWTToken}`,
            projectId: projectId,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const productIds = data.data.items.map((item) => item.products._id);
        setWishlistData(productIds);

        setIsProductInWishlist(isInWishlist);
      } catch (error) {
        console.error(
          "Error occurred during the Fetching Wishlist Data in Product Details : ",
          error
        );
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);

      if (JWTToken) {
        getWishlistData(JWTToken);
      }
    }
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

          setLoader(false);
          if (data.status === "success") {
            setNotDataFound(false);
          } else if (data.status === "fail") {
            setNotDataFound(true);
          }

          setCategoryData(data.data);
        } catch (error) {
          console.error("Error fetching Category Data:", error);
        }
      }

      getCategoryData(categoryDataApi);
    }

    if (searchData) {
      const SearchUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search=${encodeURIComponent(
        JSON.stringify(searchData)
      )}`;

      const projectId = "f104bi07c490";

      async function getSearchData(api) {
        try {
          const response = await fetch(api, {
            method: "GET",
            headers: {
              projectId: projectId,
            },
          });

          const data = await response.json();

          setLoader(false);
          if (data.status === "success") {
            setNotDataFound(false);
          } else if (data.status === "fail") {
            setNotDataFound(true);
          }

          setCategoryData(data.data);
        } catch (error) {
          console.error("Error fetching Category Data:", error);
        }
      }

      getSearchData(SearchUrl);
    }
  }, [filterData, searchData]);

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
      } else if (data.status === "fail") {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Error updating Filter Data:", error);
    }
  };

  const addProductToWishList = async (productId) => {
    const UpdateWishlistApi =
      "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";
    const projectId = "f104bi07c490";

    if (token) {
      const requestBody = JSON.stringify({
        productId: productId,
      });

      try {
        const response = await fetch(UpdateWishlistApi, {
          method: "PATCH",
          headers: {
            projectId: projectId,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "*",
          },
          body: requestBody,
          redirect: "follow",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        getWishlistData();
      } catch (error) {
        console.error("Error occurred while updating the wishlist:", error);
      }
    } else {
      handleClick();
    }
  };

  const removeProductFromWishList = async (productId) => {
    const removeWishlistApi = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`;
    const projectId = "f104bi07c490";

    if (token) {
      try {
        const response = await fetch(removeWishlistApi, {
          method: "DELETE",
          headers: {
            projectId: projectId,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        getWishlistData();
      } catch (error) {
        console.error(
          "Error occurred while Removing product the wishlist:",
          error
        );
      }
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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{
              width: "100%",
              backgroundColor: "#ffd84d",
              color: "black",
              "& .MuiAlert-icon": {
                display: "none",
              },
            }}
            icon={false}
          >
            {token
              ? "Product Added to Cart Successfully..!"
              : " Log in / Sign up to add products to Favorites"}
          </Alert>
        </Snackbar>
      </div>
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
                        Continue Shopping
                      </button>
                    </Link>
                  ) : (
                    filterClearButton && (
                      <button
                        className="individualCategoryDataNotFoundClearButton"
                        onClick={handleClearAllFilter}
                      >
                        Clear
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="individualCategoryDataContainer01">
                {categoryData?.map((data, index) => (
                  <div className="individualCategoryDataBox03" key={index}>
                    <div className="individualCategoryDataBox02" key={index}>
                      <Link
                        to={`/productCard/${data._id}`}
                        state={{ id: data._id }}
                      >
                        <img
                          className="individualCategorySingleProductImage"
                          src={data.displayImage}
                          alt={`Image ${index}`}
                        />
                      </Link>
                      <div className="individualCategorySingleProductBox">
                        <Link
                          to={`/productCard/${data._id}`}
                          state={{ id: data._id }}
                          className="individualCategorySingleProductDetail"
                        >
                          <p className="individualCategorySingleProductSellerName">
                            {data.seller.name}
                          </p>
                          <p className="individualCategorySingleProductProductName">
                            {data.name}
                          </p>
                        </Link>
                        <div className="individualCategorySingleProductProductFavIconBox">
                          {wishlistData.includes(data._id) ? (
                            <FavoriteIcon
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => {
                                removeProductFromWishList(data._id);
                              }}
                            />
                          ) : (
                            <FavoriteBorderSharpIcon
                              style={{
                                color: "#4f5362 [500] ",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                addProductToWishList(data._id);
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <Link
                        to={`/productCard/${data._id}`}
                        state={{ id: data._id }}
                        className="individualCategorySingleProductPrice"
                      >
                        <CurrencyRupeeSharpIcon sx={{ fontSize: "0.675rem" }} />
                        <p>{data.price}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
