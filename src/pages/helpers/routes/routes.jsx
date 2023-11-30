import { About } from "../../About/About";
import { Basket } from "../../Basket/Basket";
import { CatalogPage } from "../../CatalogPage/CatalogPage";
import { Contacts } from "../../Contacts/Contacts";
import { Error404 } from "../../Error404/Error404";
import { Main } from "../../Main/Main";
import { ProductInfo } from "../../ProductInfo/ProductInfo";
import {
  ABOUT_ROUTE,
  BASKET_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  ERROR404_ROUTE,
  MAIN_ROUTE,
  PRODUCT_INFO_ROUTE,
} from "../contst/const";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <Main/>,
  },
  {
    path: CATALOG_ROUTE,
    element: <CatalogPage />,
  },
  {
    path: ABOUT_ROUTE,
    element: <About />,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
  },
  {
    path: ERROR404_ROUTE,
    element: <Error404 />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
  {
    path: PRODUCT_INFO_ROUTE + '/:id',
    element: <ProductInfo />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];
