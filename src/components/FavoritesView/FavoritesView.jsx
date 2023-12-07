import { useEffect } from "react";
import "./FavoritesView.css";
import { useSelector, useDispatch } from "react-redux";
import FavItem from "../FavItem/FavItem";

export default function FavoritesView() {
  const dispatch = useDispatch();

  const categories = useSelector((store) => store.categories);
  const favorites = useSelector((store) => store.favorites);

  useEffect(() => {
    getFavorites();
    getCategories();
  }, []);

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
        {favorites.map((favorite) => (
          <FavItem key={favorite.id} favorite={favorite} />
          // <li key={favorite.id}>
          //   <img
          //     src={`https://media1.giphy.com/media/${favorite.giphy_id}/200.gif`}
          //   ></img>
          //   <form>
          //     <select>
          //       <option value={0}>none</option>
          //       {categories.map((category) => {
          //         return (
          //           <option key={category.id} value={category.id}>
          //             {category.name}
          //           </option>
          //         );
          //       })}
          //     </select>
          //   </form>
          // </li>
        ))}
      </ul>
    </>
  );
}
