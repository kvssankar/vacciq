// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// // import { useSelector } from "react-redux";

// const PrivateRoute = ({
//   component1: Component1,
//   component2: Component2,
//   component3: Component3,
//   component4: Component4,
//   path,
// }) => {
//   var isMemAuth = useSelector((state) => state.clubReducer.isMemAuth);
//   return (
//     <Route
//       path={path}
//       exact
//       render={(props) => {
//         if (!isMemAuth)
//           return (
//             <div>
//               <Component1 {...props} />
//               <Component2 {...props} />
//               <Component3 {...props} />
//               <Component4 {...props} />
//             </div>
//           );
//         else if (isMemAuth) return <Redirect to="/memberpanel" />;
//       }}
//     />
//   );
// };

// export default PrivateRoute;
