import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Header.css";
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <nav>
        <span className="logo">
            <img src={Logo} alt="imagem" />
        </span>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          
          placeholder="O que seu pet precisa?"
        />
      </div>
      <div className="profile-container">
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" color="black"/>
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" color="black" />
        </a>
      </div>
    </nav>
  );
};

export default Header;