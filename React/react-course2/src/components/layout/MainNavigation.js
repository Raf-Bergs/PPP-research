import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesctx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>react meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              my favorites
              <span className={classes.badge}>
                {favoritesctx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
