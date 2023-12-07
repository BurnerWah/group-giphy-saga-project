import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function FavItem({ favorite }) {
  const [category, setCategory] = useState(0);
  const dispatch = useDispatch(0);
  const categories = useSelector((store) => store.categories);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SAGA/SET_CATEGORY",
      payload: { id: favorite.id, category: category },
    });
  };
  return (
    <li key={favorite.id}>
      <img
        src={`https://media1.giphy.com/media/${favorite.giphy_id}/200.gif`}
      ></img>
      <form onSubmit={handleSubmit}>
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
