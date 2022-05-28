import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
