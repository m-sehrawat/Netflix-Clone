import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import ListItem from '../listItem/ListItem';
import './list2.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosOutlined
      className={className}
      style={{ ...style, display: 'block', color: 'white' }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosOutlined
      className={className}
      style={{ ...style, display: 'block', color: 'white' }}
      onClick={onClick}
    />
  );
}

const List2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="list">
      <span className="listTitle"> Multiple items </span>
      <Slider
        {...settings}
        // style={{ width: `95%`, margin: 'auto', color: 'white' }}
      >
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
        <ListItem />
        <ListItem />
      </Slider>
    </div>
  );
};

export default List2;
