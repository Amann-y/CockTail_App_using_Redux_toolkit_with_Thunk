import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleCockTails } from "../redux/features/cocktailSlice";
import { addtocart } from "../redux/features/cocktailSlice";

const SingleProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, cocktail } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchSingleCockTails(+id));
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
  return (
    <>
      <div className="container">
        <div className="row">
          {cocktail &&
            cocktail.map((ele, ind) => {
              return (
                <div
                  className="mt-2 p-2 my-div-center col-8 text-center"
                  key={ind}
                >
                  <img src={ele.strDrinkThumb} className="my-img" alt="Pic" />
                  <h3>ID : {ele.idDrink}</h3>
                  <h5>Instructions : {ele.strInstructions}</h5>
                  <h6>{ele.strDrink}</h6>
                  <div className="single-item-cart-div">
                    <Link to="/">
                      <button className="btn btn-dark">Go Back</button>
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(addtocart({ ...ele }))}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
