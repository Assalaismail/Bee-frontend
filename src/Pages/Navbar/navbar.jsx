import React, { useState, useRef } from 'react';
import '../Navbar/navbar.css';
import logo from "../../Assets/BeeLogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSubcategory, setShowSubcategory] = useState(null);
  const isMouseOver = useRef(false);
  const subcategoryTimer = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (category) => {
    isMouseOver.current = true;
    setShowSubcategory(category);
    // clearTimeout(subcategoryTimer.current);
  };

  const handleMouseLeave = () => {
    isMouseOver.current = false;
    subcategoryTimer.current = setTimeout(() => {
      if (!isMouseOver.current) {
        setShowSubcategory(null);
      }
    }, 200);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className='logo'></img>

      <div className='navbar-content'>
        <ul className={`categories ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li
            className='category-subcategory'
            onMouseEnter={() => handleMouseEnter('Category1')}
            onMouseLeave={handleMouseLeave}
          >
            Category 1
            {showSubcategory === 'Category1' && (
              <div className={`subcategory-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <p>Subcategory1-1</p>
                <p>Subcategory1-2</p>
              </div>
            )}
          </li>

          <li
            className='category-subcategory'
            onMouseEnter={() => handleMouseEnter('Category2')}
            onMouseLeave={handleMouseLeave}
          >
            Category 2
            {showSubcategory === 'Category2' && (
              <div className={`subcategory-container ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <p>Subcategory2-1</p>
                <p>Subcategory2-2</p>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="icons">
        <i className="icon"><FontAwesomeIcon icon={faSearch} /></i>
        <i className="icon"><FontAwesomeIcon icon={faUser} /></i>
        <i className="icon"><FontAwesomeIcon icon={faShoppingCart} /></i>
        <i className="menu-icon" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faBars} /></i>
      </div>
    </div>
  );
}

export default Navbar;
