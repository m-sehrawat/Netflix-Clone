import React from 'react';
import './watch.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { FlagOutlined } from '@mui/icons-material';

const watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <KeyboardBackspaceIcon className="icon" />
        <FlagOutlined className="icon" />
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        // src="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4"
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  );
};

export default watch;
