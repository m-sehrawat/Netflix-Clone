import Navbar from '../../components/Browse_Components/navbar/Navbar';
import Featured from '../../components/Browse_Components/featured/Featured';
import List2 from '../../components/Browse_Components/list/List2';
import Footer from '../../components/Browse_Components/footer/Footer';
import './browse.scss';

const Browse = () => {
  return (
    <div className="browse">
      <Navbar />
      <Featured type="movie" />
      <List2 type="trending" />
      {/* <List2 type="originals" /> */}
      {/* <List2 type="topRated" /> */}
      <Footer />
    </div>
  );
};

export default Browse;
