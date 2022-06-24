import {
  PlayArrow,
  ThumbUpOutlined,
  ThumbDownOutlined,
  Add,
} from '@mui/icons-material';
import './listItem.scss';
import { useState } from 'react';

const ListItem = props => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(props.data);

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
        src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`}
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
              <span>{props.data.release_date}</span>
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
