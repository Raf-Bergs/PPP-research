import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesctx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesctx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesctx.removeFavorite(props.id);
    } else {
      favoritesctx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
