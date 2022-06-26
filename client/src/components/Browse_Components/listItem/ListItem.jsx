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

const ListItem = props => {
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState('');

  useEffect(() => {
    async function getMovies() {
      let res = await axios.get(
        `https://api.themoviedb.org/3/${props.type}/${props.data.id}/videos?api_key=9e820f10bac6b6a1aa311da64df90958&language=en-US&append_to_response=videos`
      );

      let result = await res.data.results[0].key;
      setKey(result);
    }
    getMovies();
  }, [props.data.id, props.type]);

  // console.log(key);
  // const trailer =
  //   'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

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
          {/* <video src={trailer} autoPlay={true} loop /> */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${key}`}
            width="100%"
            height="100%"
            muted="true"
            config={{
              youtube: {
                playerVars: { showinfo: 1, autoplay: 1, controls: 1 },
              },
            }}
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1h 14m</span>
              <span className="limit">U/A 16+</span>
              <span>
                {props.data.release_date || props.data.first_air_date}
              </span>
            </div>
            <div>{props.data.name || props.data.title}</div>
            <div className="desc">{textShorten(props.data.overview, 100)}</div>
            <div className="genre">Action - Drama</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;

//1:12
