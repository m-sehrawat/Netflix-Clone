import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt=""
      />
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1589567325985-fd5f1bc73ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
        alt=""
      />
    </div>
  );
};

export default Home;
