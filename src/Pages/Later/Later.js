import { useContext } from 'react';
import LaterContext from '../../store/later-context';
import MovieItem from '../../components/Movie/MovieItem';
import classes from "./Later.module.css";


const Later = () => {
    const laterCtx = useContext(LaterContext);
    
    return(
        <section className={classes.section}>
            <h1>Watch Later Movies</h1>
            {laterCtx.totalLater === 0 ? (
                <p> You got no movies yet. Start adding some movies</p>
            ):(
                laterCtx.later.map((movieItem) => (
                    <MovieItem 
                        key={movieItem.id}
                        id={movieItem.id}
                        poster={movieItem.poster}
                        title={movieItem.title}
                        year={movieItem.year}
                        genres={movieItem.genres}
                    />
                ))
            )}
        </section>
    );
};

export default Later;