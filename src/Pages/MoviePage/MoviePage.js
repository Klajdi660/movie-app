import React, {useState, useEffect } from "react";
import moviesData from "../../db.json";
import AvailableMovie from "../../components/Movie/AvailableMovie";
import Carousel from "../../components/Carousel/Carousel";
import ReactPaginate from 'react-paginate';
import YearsFilter from "../../components/YearsFilter/YearsFilter";
import GenresFilter from "../../components/GenresFilter/GenresFilter";
import classes from "../../components/Paginate/Paginate.module.css";

const data = moviesData.movies;
const data1 = moviesData.genres;

const allYears = [ ...new Set(data.map((value)=> value.year))];
allYears.sort((a, b) => b - a);

const allGenres = [ ...new Set(data1.map((value)=> value))];
allGenres.sort();

console.log('catg', allYears);
console.log('catgnr', allGenres);

const MoviePage = () => {
  const [moviesList, setMoviesList] = useState(data.slice(0, 4));
  const [pageNumber, setPageNumber] = useState(0);
  const [years, setYears] = useState(allYears);
  const [genres, setallGenres] = useState(allGenres);
  //Pagination
  const moviePerPage = 8;
  const pageCount = Math.ceil(data.length / moviePerPage);

  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  useEffect(() => {
    setMoviesList(data.slice(pageNumber * 8, (pageNumber + 1) * 8));
  }, [pageNumber]);
  //filter movies based on their year categories 
  const filterMovie = (year) => {
    console.log(year);
    const filterMovie = data.filter((movie)=> movie.year === year.value);
    setMoviesList(filterMovie);
  }
  //filter movies based on their genres categories 
  const filterMovie1 = (genres) => {
    console.log('gnr', genres);
    const filterMovie1 = data.filter((movie)=> movie.genres === genres.value);
    setMoviesList(filterMovie1);
  }
  

  return(
    <main>
      <Carousel />
      <YearsFilter years={years} filterMovie={filterMovie}/>
      <GenresFilter genres={genres} filterMovie1={filterMovie1} />
      <AvailableMovie moviesList={moviesList}/>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.paginationBttns}
        previousLinkClassName={classes.previousBttn}
        nextLinkClassName={classes.nextBttn}
        disabledClassName={classes.paginationDisabled}
        activeClassName={classes.paginationActive}
      />
    </main>
  );
};

export default MoviePage;