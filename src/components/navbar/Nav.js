import React, { useState, useEffect } from 'react';
import './NavStyle.scss';
import useScrollY from '../../hooks/useScrollY';
import logo from '../../assets/svg/location-pin.svg';
import menu from '../../assets/svg/menu-icon.svg';
//-->  import data to display on links
import Links from '../../data/navbar-data/Data';

const Nav = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollValue = useScrollY();

  //-->  change bg color upon full screen scroll
  useEffect(() => {
    if (scrollValue > window.innerHeight * 0.9) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollValue]);

  //-->  handle menu open and close
  const handleMenu = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <div
      className={isScrolled ? 'nav-container nav-scrolled' : 'nav-container'}
    >
      {/* ----- logo div ----- */}
      <div className='nav-logo--div'>
        <h2 className='nav-logo--text'>IGBA</h2>
        <img src={logo} alt='' className='nav-logo--img' />
      </div>

      {/* ----- desktop links section ----- */}
      <nav className='nav-links--div'>
        {/* map through links data */}
        {Links.map((data) => {
          return (
            <a href={data.url} className='nav-link' key={data.text}>
              {data.text}
            </a>
          );
        })}
      </nav>

      {/* ----- CTA BTN ----- */}
      <button className='nav-cta'>Subscribe</button>

      {/* ----- mobile menu BTN ----- */}
      <div
        onClick={handleMenu}
        className={
          menuIsOpen ? 'nav-mobile--menu-btn open' : 'nav-mobile--menu-btn'
        }
      >
        <img
          src={menu}
          alt=''
          className={menuIsOpen ? 'nav-menu--img menu-open' : 'nav-menu--img'}
        />
        <p>{menuIsOpen ? 'Close' : 'Menu'}</p>
      </div>

      {/* ----- mobile menu links section ----- */}
      <nav
        className={
          menuIsOpen
            ? 'nav-mobile--links-div'
            : 'nav-mobile--links-div mobile-link-closed'
        }
      >
        {/* map through links data */}
        {Links.map((data) => {
          return (
            <a href={data.url} className='nav-link mobile' key={data.text}>
              {data.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
