import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MoviePage from "./Pages/MoviePage/MoviePage";
import FavoritePage from "./Pages/Favorites/Favorites";
import LaterPage from "./Pages/Later/Later";
import Search from './Pages/Search/Search';

const App = () => {
  return (
        <Layout>
          <Switch>
            <Route path="/" exact>
              <MoviePage />
            </Route>
            <Route path="/favorites">
              <FavoritePage />
            </Route>
            <Route path="/later">
              <LaterPage />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Layout>
  );
}

export default App;
