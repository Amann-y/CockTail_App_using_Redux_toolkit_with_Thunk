import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCockTails } from "../redux/features/cocktailSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, cocktails, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchCockTails());
  }, []);

  if (loading) {
    return (
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // if (!cocktails) {
  //   return (
  //     <div className="container-fluid mt-5">
  //       <div className="d-flex justify-content-center">
  //         <div className="spinner-border" role="status">
  //           <span className="visually-hidden">No Cocktail Found </span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="container">
        <div className="row">
          {cocktails &&
            cocktails.map((ele, ind) => {
              return (
                <div className="col-md-4" key={ind}>
                  <img
                    className="img-fluid"
                    src={ele.strDrinkThumb}
                    alt="Pic"
                  />
                  <h3>ID : {ele.idDrink}</h3>
                  <h5>{ele.strAlcoholic}</h5>
                  <h6>{ele.strDrink}</h6>
                  <Link to={`/products/${ele.idDrink}`}>
                    <button className="btn btn-dark">Details</button>
                  </Link>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
