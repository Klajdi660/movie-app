
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from "./MainNav.module.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoritesContext from '../../store/favorites-context';
import LaterContext from '../../store/later-context';


const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);
    const laterCtx = useContext(LaterContext)

    return ( 
        <header onClick={() => window.scroll(0, 0)} className={classes.header}>
            <div className={classes.logo}>Movie Box 🎬</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Movie <MovieIcon /> </Link>
                    </li>
                    <li>
                        <Link to="/favorites">My favorites  <FavoriteIcon /> <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                    <li>
                        <Link to="/later">Watch Later <WatchLaterIcon /><span className={classes.badge}>{laterCtx.totalLater}</span></Link>
                    </li>
                    <li>
                        <Link to="/search">Search <SearchIcon /> </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;