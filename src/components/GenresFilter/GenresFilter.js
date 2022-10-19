import React from 'react';
import Select from 'react-select';
import classes from './GenresFilter.module.css';

const GenresFilter = ({genres, filterMovie1}) => {
    const options = genres.map((movie) => ({ value: movie, label: movie }));

    return (
        <div>  
            <Select
                className={classes.selectOptionGenres}
                options={options}
                placeholder={"Sort by Genres"}
                onChange={filterMovie1}
            />
        </div>
    )
}

export default GenresFilter;