import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesctx = useContext(FavoritesContext);

  let content;

  if (favoritesctx.totalFavorites === 0) {
    content = <p>no favs yet bud</p>;
  } else {
    content = <MeetupList meetups={favoritesctx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
