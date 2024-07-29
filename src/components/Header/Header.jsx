import react from 'react'
import logo from '../../assets/OlxLogo.jsx'
import Search from '../../assets/Search.jsx'
import Arrow from '../../assets/Arrow.jsx'
import './Header.css';
import SellButton from '../../assets/SellButton.jsx'
import SellButtonPlus from '../../assets/SellButtonPlus.jsx'
import OlxLogo from '../../assets/OlxLogo.jsx';

function Header(){
 return(
    <>
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search/>
          <input type="text" placeholder='India'/>
          <Arrow/>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
          <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>Login</span>
          <hr />
        </div>
        <div className="sellMenu">
        <SellButton/>
          <div className="sellMenuContent">
          <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
    </>
 )
}
export default Header