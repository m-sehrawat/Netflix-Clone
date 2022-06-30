import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import ListItem from '../listItem/ListItem';
import './list2.scss';
import '../listItem/listItem.scss';
import axios from 'axios';
import { requests } from '../../../API/Requests';
import { useEffect, useState } from 'react';

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

const List2 = props => {
  const [type, setType] = useState('');
  const [data, setData] = useState([]);
  const [movieOrTv, setMovieOrTv] = useState('movie');

  let randomSlide = Math.floor(Math.random() * 3);
  //Slider Settings
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: randomSlide,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //Fetching Slider API
  useEffect(() => {
    async function fetchData(url) {
      try {
        const req = await axios.get(`https://api.themoviedb.org/3${url}`);
        setData(req.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    if (props.type === 'trending') {
      setType('Trending Now');
      fetchData(requests.fetchTrending);
    } else if (props.type === 'originals') {
      setType('Netflix Originals');
      setMovieOrTv('tv');
      fetchData(requests.fetchOriginals);
    } else {
      setType('Top Rated');
      fetchData(requests.fetchTopRated);
    }
  }, [props.type]);

  return (
    <div className="list2">
      <span className="listTitle2"> {type} </span>
      <Slider {...settings}>
        {data.map(elem => (
          <ListItem key={elem.id} data={elem} type={movieOrTv} />
        ))}
      </Slider>
    </div>
  );
};

export default List2;
