import "./Styles/main.css";
import { useEffect, useState } from "react";
import logo from "./assests/header-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks.ts";
import { useSelector } from "react-redux";
import { setSearch } from "./slice/header.js";
import { BASKET_ROUTE, CATALOG_ROUTE } from "../../pages/helpers/contst/const";
export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useAppDispatch();
  const { search } = useSelector((state) => state.header);
  const { basket, count } = useSelector((state) => state.basket);

  const navigate = useNavigate();

  const searchClass = () => {
    return isSearch
      ? "header-controls-search-form form-inline"
      : "header-controls-search-form form-inline invisible";
  };

  const handlerBtn = () => {
    setIsSearch(!isSearch);
    if(search !== undefined) {
        navigate(CATALOG_ROUTE)
    }
  }

  useEffect(() => {

  }, [basket])

  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Bosa Noga" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalog.html">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about.html">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts.html">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <div className="header-controls-pics">
                  <div
                    onClick={handlerBtn}
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                  ></div>
                  <div onClick={() => navigate(BASKET_ROUTE)} className="header-controls-pic header-controls-cart">
                    {count > 0 && (
                      <div className="header-controls-cart-full">{count}</div>
                    )}
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className={searchClass()}>
                  <input
                    className="form-control"
                    placeholder="Поиск"
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
