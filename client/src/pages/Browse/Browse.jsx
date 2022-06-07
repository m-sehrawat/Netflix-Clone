import Navbar from '../../components/Browse_Components/navbar/Navbar';
import Featured from '../../components/Browse_Components/featured/Featured';
import List from '../../components/Browse_Components/list/List';
import List2 from '../../components/Browse_Components/list/List2';
import './browse.scss';

const Browse = () => {
  return (
    <div className="browse">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List2 />
      <List2 />
    </div>
  );
};

export default Browse;
