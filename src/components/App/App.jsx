import SearchFrom from "../SearchForm";
import FavoritesView from "../FavoritesView/FavoritesView";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";



import Nav from "../Nav";

  function App() {
  return (
    <div>
      <Router>
        <header>
          <h1>Giphy Search!</h1>
          <Nav />
        </header>

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
