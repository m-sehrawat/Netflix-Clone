import Navbar from '../../components/Browse_Components/navbar/Navbar';
import Featured from '../../components/Browse_Components/featured/Featured';
import List from '../../components/Browse_Components/list/List';
import Footer from '../../components/Browse_Components/footer/Footer';
import './browse.scss';

const Browse = () => {
  return (
    <div className="browse">
      <Navbar />
      <Featured type="movie" />
      <List type="trending" />
      <List type="originals" />
      <List type="topRated" />
      <Footer />
    </div>
  );
};

export default Browse;
