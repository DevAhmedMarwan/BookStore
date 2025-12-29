// import MainLayout from "@/Main/MainLayout";
// import Books from "@/pages/Books";
// import Error from "@/pages/Error";
// import Maps from "@/pages/Maps";
// import SingleBooks from "@/pages/SingleBooks";
// import { createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Books />,
//       },
//       {
//         path: "singleBooks/:id",
//         element: <SingleBooks />,
//       },
//       {
//         path: "*",
//         element: <Error />,
//       },
//       {
//         path: "maps",
//         element: <Maps />,
//       },
//     ],
//   },
// ]);
// export default router;
// // -----------------------------------------------------------------
import { createHashRouter } from "react-router-dom";
import MainLayout from "@/Main/MainLayout";
import Books from "@/pages/Books";
import SingleBooks from "@/pages/SingleBooks";
import Maps from "@/pages/Maps";
import Error from "@/pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: "singleBooks/:id",
        element: <SingleBooks />,
      },
      {
        path: "maps",
        element: <Maps />,
      },
    ],
  },
]);

export default router;



