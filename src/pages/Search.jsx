// import React, { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { fetchSearchCockTails } from "../redux/features/cocktailSlice";

// const Search = () => {
//   const dispatch = useDispatch();
//   const searchTerm = useRef();

//   const handleChange = () => {
//     const searchText = searchTerm.current.value;
//     console.log(searchText);
//     dispatch(fetchSearchCockTails({ searchText }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <>
//       <div className="container-fluid mt-4">
//         <div className="row">
//           <div className="col-8 mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   placeholder="Search"
//                   ref={searchTerm}
//                   onChange={handleChange}
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Search;
