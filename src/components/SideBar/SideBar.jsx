import "./Sidebar.css";
import Category from './Category/category.jsx'
import Price from './Price/price.jsx'
import Acessories from './Acessories/acessories.jsx'
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Acessories handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;