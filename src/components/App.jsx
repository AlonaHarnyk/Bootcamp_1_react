import { GlobalStyles } from "utils/GlobalStyle";
// import movies from '../data/movies.json';
import { moviesMapper } from "../utils/mapper";
import { useState, useEffect } from "react";

import { MoviesGallery } from "./MoviesGallery/MoviesGallery";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Notification } from "./Notification/Notitfication";
import { getMovies } from "../servises/moviesApi";

export const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isShown) {
      setIsLoading(true);
      getMovies(page)
        .then(({ data: { results } }) => {
          setMovies((prevMovies) => [...prevMovies, ...moviesMapper(results)]);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isShown, page]);

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => prevMovies.filter(({ id }) => id !== movieId));
  };

  const openModal = (data) => {
    setCurrentImage(data);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const showFilms = () => {
    setIsShown((prevSetIsShown) => !prevSetIsShown);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Button
        text={isShown ? "Hide movies" : "Show movies"}
        clickHandler={showFilms}
      />
      {isShown && (
        <>
          <MoviesGallery
            movies={movies}
            deleteMovie={deleteMovie}
            openModal={openModal}
          />
          {!isLoading && !error && (
            <Button text="Load more" clickHandler={loadMore} />
          )}
        </>
      )}
      {isLoading && <Loader />}
      {error && <Notification text={error} />}
      {currentImage && (
        <Modal currentImage={currentImage} closeModal={closeModal} />
      )}
      <GlobalStyles />
    </>
  );
};
