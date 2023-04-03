import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleCockTails } from "../redux/features/cocktailSlice";

const SingleProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, cocktail } = useSelector((state) => state.app);

  const [sdata, setSData] = useState([cocktail]);

  useEffect(() => {
    dispatch(fetchSingleCockTails(id));
  }, []);

  if (loading) {
    return (
      <div className="container-fluid mt-5">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {cocktail.map((ele, ind) => {
            return (
              <div className="mt-5 my-div-center col-8 text-center">
                <img
                  src={ele.strDrinkThumb}
                  className="img-fluid"
                  alt="Pic"
                  style={{ height: "400px" }}
                />
                <h3>ID : {ele.idDrink}</h3>
                <h5>{ele.strAlcoholic}</h5>
                <h6>{ele.strDrink}</h6>
                <Link to="/">
                  <button className="btn btn-dark">Go Back</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
