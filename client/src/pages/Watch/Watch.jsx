import React from 'react';
import './watch.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { FlagOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player/lazy';

const url = 'https://api.themoviedb.org/3';
const API_KEY = `9e820f10bac6b6a1aa311da64df90958`;

const Watch = () => {
  const [watchMovies, setWatchMovies] = useState([]);
  const opts = {
    // height: '1000px',
    // width: '1000px',
    // border: '10px solid red',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      loop: 1,
    },
  };

  useEffect(() => {
    async function getMovies() {
      let res = await axios.get(
        'https://api.themoviedb.org/3/movie/297762/videos?api_key=9e820f10bac6b6a1aa311da64df90958&language=en-US&append_to_response=videos'
      );
      console.log(res.data.results);
    }
    getMovies();
  }, []);

  return (
    <div className="watch">
      <div className="back">
        <KeyboardBackspaceIcon className="icon" />
        <FlagOutlined className="icon" />
      </div>
      {/* <video
        className="video"
        autoPlay
        // progress
        controls
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      /> */}
      <YouTube className="video" videoId="8LJsMUkxIWY" opts={opts} />
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=EYjQBFCbRbE"
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              controls: 1,
              autoplay: 1,
              rel: 0,
              fs: 0,
              loop: 1,
            },
          },
        }}
      /> */}
    </div>
  );
};

export default Watch;
