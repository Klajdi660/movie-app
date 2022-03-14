import React from 'react';
import Select from 'react-select';
import classes from './YearsFilter.module.css';

const CategoriesFilter = ({years, filterMovie}) => {
    const options = years.map((movie) => ({ value: movie, label: movie }));
    return (
        <div>  
            <Select
                className={classes.selectOption}
                options={options}
                placeholder={"Sort by Year"}
                onChange={filterMovie}
            />
        </div>
    )
}

export default CategoriesFilter;