import React from 'react';
import Select from 'react-select';
import classes from './YearsFilter.module.css';

const YearsFilter = ({years, filterMovie}) => {
    const options = years.map((movie) => ({ value: movie, label: movie }));
    return (
        <div>  
            <Select
                className={classes.selectOptionYear}
                options={options}
                placeholder={"Sort by Year"}
                onChange={filterMovie}
            />
        </div>
    )
}

export default YearsFilter;