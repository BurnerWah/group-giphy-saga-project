import { useEffect } from "react";
import "./FavoritesView.css";
import { useSelector, useDispatch } from "react-redux";

export default function FavoritesView() {
  const dispatch = useDispatch();

  const searchResults = useSelector((store) => store.searchResults);
  const categories = useSelector((store) => store.categories);
  const favorites = useSelector((store) => store.favorites);
  console.log("The store selector:", searchResults);

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
    </>
  );
}
