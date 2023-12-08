import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchFrom() {
  //input expects a string
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  //Gets reducer from the store
  const searchResults = useSelector((store) => store.searchResults);

  //setting the input value to whatever string we toyped in
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  //calling our get function to get the results we searched
  const newSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "SAGA/SEARCH", payload: search });
  };

  const setFavorite = (id) => {
    dispatch({
      type: "SAGA/ADD_FAVORITE",
      payload: id,
    });
  };

  return (
    <div>
      <form onSubmit={newSearch}>
        <input
          type="text"
          value={search}
          placeholder="Name"
          onChange={handleSearch}
        />
        <button>search</button>
        {/* mapping through are search results we held in our reducer and rending the img */}
      </form>
      {searchResults.map((gif) => (
        <div className="images">
          <img src={gif.images.fixed_height.url}></img>
          <button onClick={() => setFavorite(gif.id)}>favorite</button>
        </div>
      ))}
    </div>
  );
}
