import "./Sidebar.css";
import Category from '../SideBar/Category/category'
import Acessories from '../SideBar/Acessories/acessories'
import Price from '../SideBar/Price/price'
const Sidebar = () => {
  return (
    
    <section className="sidebar">
      <Category  />
      <Acessories />
      <Price />
  
  </section>
  
  );
};

export default Sidebar;
