import { Route, Switch } from 'react-router-dom';
import FavoritePage from "./Pages/Favorites/Favorites";
import MoviePage from "./Pages/MoviePage/MoviePage";
import LaterPage from "./Pages/Later/Later";
import Search from './Pages/Search/Search';
import Layout from './components/Layout/Layout';

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