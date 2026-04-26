// import {createBrowserRouter} from "react-router-dom"
// import {Home} from "./pages.jsx/home";
// import {About} from "./pages.jsx/about"
// import {Services} from "./pages.jsx/services"
// import  {Contacts} from "./pages.jsx/contacts"
//  import {Navi} from "./component.jsx/navbar";

// export const router=createBrowserRouter(
//      [
//         {
//             path:"/",
//             element:<Home/>
//         },
//         {
//             path:"/about",
//             element:<About/>
//         },
//         {
//             path:"/services",
//             element:<Services/>
//         },
//         {
//             path:"/contacts",
//             element:<Contacts/>
//         }
//     ]
// )

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages.jsx/home";
import { About } from "./pages.jsx/about";
import { Services } from "./pages.jsx/services";
import { Contacts } from "./pages.jsx/contacts";
import { Navi } from "./component.jsx/navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navi />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contacts",
        element: <Contacts />
      }
    ]
  }
]);