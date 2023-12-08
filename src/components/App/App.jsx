import SearchFrom from "../SearchForm";
import FavoritesView from "../FavoritesView/FavoritesView";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Nav from "../Nav";

  function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
     

      <Router>
        <Nav />
        <Route exact path="/">
          <SearchFrom />
        </Route>
        <Route exact path="/favorites">
          <FavoritesView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
