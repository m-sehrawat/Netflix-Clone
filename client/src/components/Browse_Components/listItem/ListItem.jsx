import {
  PlayArrow,
  ThumbUpOutlined,
  ThumbDownOutlined,
  Add,
} from '@mui/icons-material';
import './listItem.scss';
import { useState } from 'react';

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
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
        src="https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1253&q=80"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
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
              <span>1999</span>
            </div>
            <div className="desc">Lorem Ipsum is simply dummy text</div>
            <div className="genre">Action - Drama</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;

//1:12
