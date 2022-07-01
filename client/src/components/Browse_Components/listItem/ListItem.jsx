import {
  PlayArrow,
  ThumbUpOutlined,
  ThumbDownOutlined,
  Add,
} from '@mui/icons-material';
import './listItem.scss';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/react';

const ListItem = props => {
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState('');

  //Get YT Video Key For Each Movie
  useEffect(() => {
    async function getMovies() {
      let res = await axios.get(
        `https://api.themoviedb.org/3/${props.type}/${props.data.id}/videos?api_key=9e820f10bac6b6a1aa311da64df90958&language=en-US&append_to_response=videos`
      );
      let result = await res.data.results.filter(
        data => data.type === 'Trailer'
      )[0];
      setKey(result.key);
    }
    getMovies();
  }, [props.data.id, props.type]);

  //Extras As Usual
  function textShorten(string, maxLength) {
    return string?.length > maxLength
      ? string.substring(0, maxLength) + ' ...'
      : string;
  }

  return (
    <div
      className="listItem"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`}
        alt=""
      />
      {isHovered && (
        <>
          <ReactPlayer
            // url={`https://www.youtube.com/watch?v=${key}`}
            url={`https://www.youtube-nocookie.com/embed/${key}`}
            width="100%"
            height="100%"
            muted={true}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  autoplay: 1,
                  controls: 0,
                  disablekb: 1,
                  end: 30,
                  rel: 0,
                  fs: 0,
                  playlist: key,
                  loop: 1,
                },
              },
            }}
          />
          <Box className="itemInfo">
            <Flex className="icons" gap="5px">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </Flex>
            <Flex className="itemInfoTop" gap="5px">
              <span className="limit">U/A 18+</span>
              <span>
                {props.data.release_date || props.data.first_air_date}
              </span>
            </Flex>
            <span>{props.data.name || props.data.title}</span>
            <div className="desc">{textShorten(props.data.overview, 100)}</div>
            <hr />
            <span className="rating">
              Rating : {props.data.vote_average.toFixed(1)}
            </span>
          </Box>
        </>
      )}
    </div>
  );
};

export default ListItem;

//1:12
