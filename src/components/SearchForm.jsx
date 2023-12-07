import { useState } from "react";

export default function SearchFrom() {
  const [search, setSearch] = useState("");

  console.log(search);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const newSearch = (event) => {
    event.preventDefault();
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
      </form>
    </div>
  );
}
