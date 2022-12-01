import React from 'react';
import Select from 'react-select';
import classes from './GenresFilter.module.css';

const GenresFilter = (props) => {
    const {genres, filterMovie1} = props;
    const options = genres.map((movie) => ({ value: movie, label: movie }));

    return (
        <Select
            className={classes.selectOptionGenres}
            options={options}
            placeholder={"Sort by Genres"}
            onChange={filterMovie1}
        />
    );
};

export default GenresFilter;
