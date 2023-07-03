import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_MOVIES = gql`
  query queryMovies {
    movies {
      id
      name
      description
      year
    }
  }
`;

const MovieList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {data.movies.map((movie) => (
          <li key={movie.id}>
            {movie.name} - {movie.description} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;