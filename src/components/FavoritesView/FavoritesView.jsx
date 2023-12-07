import "./FavoritesView.css";
import { useSelector, useDispatch } from "react-redux";

export default function FavoritesView() {
  const getImages = () => {
    const dispatch = useDispatch();

    const imgReducer = useSelector((store) => store);
  };
  return (
    <>
      <h1>Favorites View</h1>
    </>
  );
}
