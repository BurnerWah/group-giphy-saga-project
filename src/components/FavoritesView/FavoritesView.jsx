import { useEffect } from "react";
import "./FavoritesView.css";
import { useSelector, useDispatch } from "react-redux";

export default function FavoritesView() {
  const dispatch = useDispatch();

  const categories = useSelector((store) => store.categories);
  const favorites = useSelector((store) => store.favorites);

  useEffect(() => {
    getFavorites();
  });

  const getFavorites = () => {
    dispatch({
      type: "SAGA/GET_FAVORITES",
    });
  };
  return (
    <>
      <h1>Favorites View</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <img
              src={`https://media1.giphy.com/media/${favorite.giphy_id}/200.gif`}
            ></img>
          </li>
        ))}
      </ul>
    </>
  );
}
