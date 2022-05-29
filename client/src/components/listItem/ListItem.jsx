import {
  PlayCircle,
  AddCircleOutlineOutlined,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from '@mui/icons-material';
import './listItem.scss';

const ListItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://images.unsplash.com/photo-1592574083647-6d7c37d81535?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayCircle />
          <AddCircleOutlineOutlined />
          <ThumbUpOutlined />
          <ThumbDownOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 7 mins</span>
          <span className="ageLimit">+18</span>
          <span>2012</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <div className="genre">Thriller</div>
      </div>
    </div>
  );
};

export default ListItem;

//1:12
