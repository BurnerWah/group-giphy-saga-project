import React, { useEffect } from "react";
import "./FavoritesView.css";
import { useSelector, useDispatch } from "react-redux";

export default function FavoritesView() {
  const getImages = () => {
    const dispatch = useDispatch();

    const imgReducer = useSelector((store) => store.getFavorites);

    useEffect =
      (() => {
        getFavPictures();
      },
      []);

    const getFavPictures = () => {
      dispatch({
        type: "GET_FAVORITES",
      });
    };
  };
  return (
    <>
      <h1>Favorites View</h1>
    </>
  );
}
