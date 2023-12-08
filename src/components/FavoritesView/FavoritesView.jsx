import { useEffect } from "react";
import "./FavoritesView.css";
import { useSelector, useDispatch } from "react-redux";
import FavItem from "../FavItem/FavItem";

export default function FavoritesView() {
  const dispatch = useDispatch();

  const categories = useSelector((store) => store.categories);
  const favorites = useSelector((store) => store.favorites);

  // 👇 on load, gets the pictures and categories
  useEffect(() => {
    getFavorites();
    getCategories();
  }, []);

  // 👇 gets the favorite data. As there is no payload it sends nothing
  const getFavorites = () => {
    dispatch({
      type: "SAGA/GET_FAVORITES",
    });
  };
  const getCategories = () => {
    dispatch({ type: "SAGA/GET_CATEGORIES" });
  };

  return (
    <>
      <h1>Favorites View</h1>
      <ul>
        {/* Sends over the favorite object to favItem component */}
        {favorites.map((favorite) => (
          <FavItem key={favorite.id} favorite={favorite} />
        ))}
      </ul>
    </>
  );
}
