import SearchFrom from "../SearchForm";
import FavoritesView from "../FavoritesView/FavoritesView";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Router>
        <Route path="/">
          <SearchFrom />
        </Route>
        <Route path="favorites">
          <FavoritesView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
