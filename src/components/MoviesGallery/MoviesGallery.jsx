export const MoviesGallery = ({ movies, deleteMovie, openModal }) => {
  return (
    <ul>
      {movies.map(({ image, id, title, votes, watched}) => {
        return <li key={id}>
          <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <p>Watched: {watched.toString()}</p>
            <button type='button' onClick={() => deleteMovie(id)}>Delete</button>
            <button type="button" onClick={()=>openModal({src: image, alt: title})}>Open poster</button>
        </li>;
      })}
    </ul>
  );
};
