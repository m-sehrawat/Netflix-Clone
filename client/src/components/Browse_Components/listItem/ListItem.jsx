import {
  PlayCircle,
  ThumbUpOutlined,
  ThumbDownOutlined,
  AddCircleOutline,
} from '@mui/icons-material';
import './listItem.scss';
import { useState } from 'react';

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const video = 'https://youtu.be/H5v3kku4y6Q';
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
      <div className="itemInfo">
        <div className="icons">
          <PlayCircle />
          <AddCircleOutline />
          <ThumbUpOutlined />
          <ThumbDownOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1h 14m</span>
          <span className="limit">U/A 16+</span>
          <span>1999</span>
        </div>
        <div className="desc">Lorem Ipsum is simply dummy text</div>
        <div className="genre">Action - Drama</div>
      </div>
    </div>
  );
};

export default ListItem;

//1:12
