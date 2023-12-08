import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function FavItem({ favorite }) {
  // 👇 useState is set to favorite.category_id, so that it appears on load
  const [category, setCategory] = useState(favorite.category_id);
  const dispatch = useDispatch(0);
  const categories = useSelector((store) => store.categories);

  // Handles submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    // 👇 dispatches to the SAGA that holds the category data
    dispatch({
      type: "SAGA/SET_CATEGORY",
      // 👇 sets the cateory for the specific item by using its ID
      payload: { id: favorite.id, category: category },
    });
  };
  return (
    <li key={favorite.id}>
      <img
        src={`https://media1.giphy.com/media/${favorite.giphy_id}/200.gif`}
      ></img>
      <form onSubmit={handleSubmit}>
        {/* drop-down menu */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value={0}>none</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </li>
  );
}
