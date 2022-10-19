import React, { useState } from "react";
import classes from "./Search.module.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import moviesData from "../../db.json";

const Search = () => {
  const data = moviesData.movies;
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    } 
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    console.log('filter', filteredData);
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchInputs}>
          <input
            type="text"
            placeholder="Search for a Movie..."
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className={classes.searchIcon}>
            {filteredData.length === 0 ? (
              <SearchIcon />
              ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </div>
      <div className={classes.templateContainer}>
        {filteredData.filter((value, key) => { 
          return value;
        })     
        .map((value, key) => { 
          return (
            <div className={classes.card}>
              <img
                className={classes.poster}
                src={value.posterUrl}
                alt={value.title}
              /> 
              <span className={classes.title}>{value.title}
                (<span className={classes.title}>{value.year}</span>)
              </span>
              <span className={classes.subTitle}>{value.genres.map((value, index) => {
                return (
                  <>
                    {index ? ' ' : ''} {value}
                  </>
                )})}
              </span>  
            </div>
          )}
        )}
      </div>
    </>
  )
}

export default Search;
