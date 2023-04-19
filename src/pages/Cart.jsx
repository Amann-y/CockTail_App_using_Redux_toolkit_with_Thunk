import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../redux/features/cocktailSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {cart.length > 0 ? (
            cart.map((ele, ind) => {
              return (
                <div className="col-md-4 text-center my-2" key={ind}>
                  <img
                    src={ele.strDrinkThumb}
                    className="img-fluid"
                    alt="Pic"
                    style={{ height: "400px" }}
                  />
                  <h3>ID : {ele.idDrink}</h3>
                  <h5>Status: {ele.strAlcoholic}</h5>
                  <h6>Drink: {ele.strDrink}</h6>
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(removefromcart(ind))}
                  >
                    Remove From The Cart
                  </button>
                </div>
              );
            })
          ) : (
            <h2 className="text-center text-bg-danger">No Item in Cart</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
