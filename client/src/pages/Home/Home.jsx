import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import List2 from '../../components/list/List2';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List2 />
      {/* <List2 /> */}
    </div>
  );
};

export default Home;
