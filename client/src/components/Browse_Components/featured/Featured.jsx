import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import './featured.scss';
import { useState, useEffect } from 'react';
import axios from '../../../API/axios';
import { requests, API_KEY } from '../../../API/Requests';
import { Spinner } from '@chakra-ui/react';

const Featured = ({ type }) => {
  const [movie, setMovie] = useState([]);
  const [allGenre, setAllGenre] = useState([]);
  const [genre, setGenre] = useState('Genres');
  const [movieKey, setMovieKey] = useState('');

  //Genre Request
  useEffect(() => {
    async function fetchGenre() {
      const req = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      setAllGenre(req.data.genres);
    }
    fetchGenre();
  }, []);

  //Based on Genre Request
  useEffect(() => {
    async function fetchData() {
      let request =
        genre === 'Genres'
          ? requests.fetchOriginals
          : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=2&with_genres=${genre}`;
      const req = await axios.get(request);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    // async function getVideo() {
    //   let res = await axios.get(
    //     `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=9e820f10bac6b6a1aa311da64df90958&language=en-US&append_to_response=videos`
    //   );
    //   let result = await res.data.results[0].key;
    //   setMovieKey(result);
    // }
    fetchData();
  }, [genre]);

  function textShorten(string, maxLength) {
    return string?.length > maxLength
      ? string.substring(0, maxLength) + ' ...'
      : string;
  }

  function genreSelector(event) {
    setGenre(event.target.value);
  }

  // console.log(movieKey);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'TV shows'}</span>
          <select name="genre" id="genre" onChange={genreSelector}>
            <option>Genres</option>
            {allGenre.map(genre => {
              return (
                <option value={genre.id} key={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
      />
      <div className="info">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
        <span className="name">{movie.name || movie.title}</span>
        <span className="description">{textShorten(movie.overview, 150)}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

// 36.47
