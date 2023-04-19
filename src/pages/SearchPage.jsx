import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCockTails } from "../redux/features/cocktailSlice";

const SearchPage = () => {
  const [searchItem, setSearchItem] = useState("");
  const { search } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchSearchCockTails(searchItem));
  };

  return (
    <>
      <div className="container mt-2">
        <form class="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search by First Letter of the Drink"
            aria-label="Search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>

      <div className="container mt-4">
        <div className="row">
          {search &&
            search.map((ele, ind) => {
              return (
                <div className="col-md-4" key={ind}>
                  <img
                    className="img-fluid"
                    src={ele.strDrinkThumb}
                    alt="Pic"
                  />
                  <h3>ID : {ele.idDrink}</h3>
                  <h5>{ele.strAlcoholic}</h5>
                  <h3>Name : {ele.strDrink}</h3>

                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
