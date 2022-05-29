import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import './featured.scss';

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'TV shows'}</span>
          <select name="genre" id="genre">
            <option>Genres</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
          </select>
        </div>
      )}
      <img
        src="https://images.unsplash.com/photo-1589567325985-fd5f1bc73ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
        alt=""
      />
      <div className="info">
        <img
          src="https://s3.amazonaws.com/www-inside-design/uploads/2017/10/strangerthings_feature-810x810.jpg"
          alt=""
        />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Veritatis ipsa totam perferendis asperiores, repudiandae
          possimus magni eos quibusdam consectetur corrupti maxime commodi
          dolore. Ea et incidunt minima culpa!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

// 36.47
