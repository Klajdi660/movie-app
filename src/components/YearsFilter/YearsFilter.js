import React from 'react';
import Select from 'react-select';
import classes from './YearsFilter.module.css';

const YearsFilter = (props) => {
    const {years, filterMovie} = props;
    const options = years.map((movie) => ({ value: movie, label: movie }));

    return (
        <Select
            className={classes.selectOptionYear}
            options={options}
            placeholder={"Sort by Year"}
            onChange={filterMovie}
        />
    );
};

export default YearsFilter;
