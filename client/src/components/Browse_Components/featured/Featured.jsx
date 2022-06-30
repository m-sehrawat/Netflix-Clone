import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import './featured.scss';
import { useState, useEffect } from 'react';
import axios from '../../../API/axios';
import YouTube from 'react-youtube';
import { requests, API_KEY } from '../../../API/Requests';
import { Box, Button, Flex, Image, Select } from '@chakra-ui/react';

const Featured = ({ type }) => {
  const [movie, setMovie] = useState([]);
  const [allGenre, setAllGenre] = useState([]);
  const [genre, setGenre] = useState('Genres');
  const [youtubeKey, setYouTubeKey] = useState(`pt81CJcWZy8`);
  const [showVideo, setShowVideo] = useState(false);

  window.YTConfig = {
    host: 'https://www.youtube.com',
  };
  const opts = {
    height: `100%`,
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      disablekb: 1,
      modestbranding: 1,
      controls: 0,
      showinfo: 0,
      end: 30,
      rel: 0,
      fs: 0,
      playlist: youtubeKey,
      loop: 0,
    },
  };

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
          ? requests.fetchTrending
          : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=2&with_genres=${genre}`;
      const req = await axios.get(request);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
    setShowVideo(false);
  }, [genre]);

  //Based on Current Movie Video Request
  useEffect(() => {
    async function fetchVideo() {
      // console.log(`MOVIE DATA =>`, movie);
      if (movie.length !== 0) {
        let request = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
        );
        // console.log(`REQUSTED VIDEO DATA =>`, request.data);
        // console.log(
        //   'RREQUSTED VIDEO DATA KEY =>',
        //   request.data.results.filter(data => data.type === 'Trailer')
        // );
        // setYouTubeKey(request.data.results[0].key);
        setYouTubeKey(
          request.data.results.filter(data => data.type === 'Trailer')[0].key
        );
      }
    }
    fetchVideo();
  }, [movie]);

  //Extras ---------------------------------------------
  function textShorten(string, maxLength) {
    return string?.length > maxLength
      ? string.substring(0, maxLength) + ' ...'
      : string;
  }

  function genreSelector(event) {
    setGenre(event.target.value);
  }

  //Display video on Each mounting
  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 3000);
  }, [genre]);

  // console.log('MOVIE =>', movie);

  return (
    <Box className="featured" height={['100%', '90vh']}>
      {type && (
        <Flex className="category" left={['80px', '50px']} gap="10">
          <span>{type === 'movie' ? 'Movies' : 'TV shows'}</span>
          <Select
            className="genreSelect"
            size={['xs', 'sm']}
            name="genre"
            id="genre"
            bg={`var(--main-color)`}
            onChange={genreSelector}
          >
            <option>Genres</option>
            {allGenre.map(genre => {
              return (
                <option value={genre.id} key={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </Select>
        </Flex>
      )}
      <Box h="100%" display={['none', 'block']}>
        {showVideo ? (
          <YouTube
            className="splash"
            videoId={youtubeKey}
            opts={opts}
            onEnd={() => setShowVideo(false)}
          />
        ) : (
          <Image
            className="splash"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
          />
        )}
      </Box>

      <Flex
        className="info"
        direction="column"
        position={['', 'absolute']}
        width={['100%', '35%']}
        left={['0px', '50px']}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
          width={['100%', '200px']}
        />
        <Flex className="text" display={['none', 'flex']}>
          <span className="name">{movie.name || movie.title}</span>
          <span className="description">
            {textShorten(movie.overview, 150)}
          </span>
        </Flex>

        <Flex
          direction="row"
          gap="20px"
          p="10px"
          justify="space-between"
          maxWidth="400px"
        >
          <Button className="add a">
            <AddIcon />
            <span>My List</span>
          </Button>
          <Button className="play a">
            <PlayArrow />
            <span>Play</span>
          </Button>
          <Button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Featured;

// 36.47
