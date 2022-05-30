import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import './list.scss';
import { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  //bullshit code from stackoverflow
  //use (React -slick)
  const handleClick = direction => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider left"
          onClick={() => handleClick('left')}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="slider right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default List;
