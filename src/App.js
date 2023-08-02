import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <Products/> },
      { path: "error", element: <Error/> }, 
      { path: "products/:Id", element: <ProductDetail/>}, 
    ]
  },

 
]);
function App() {
  return (
  <>
  <RouterProvider router={router} />
  </>
  )

}

export default App;
