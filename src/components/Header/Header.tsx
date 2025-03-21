import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import SVG_Logo from '../../assets/svg/logo.svg';
import SVG_Inst from '../../assets/svg/inst.svg';
import SVG_In from '../../assets/svg/in.svg';
import SVG_Facebook from '../../assets/svg/facebook.svg';
import SVG_Twitter from '../../assets/svg/twitter.svg';
import { Button } from '../Button/Button';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
const cx = classNames.bind(s);

export const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 60) return true;
        if (prev && y < 40) return false;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <header
      className={cx('header', isScrolled && 'stickyHeader', isMobileMenuOpen && 'isOpenMenu')}
    >
      <div className={cx('headerContent')}>
        <Link className={cx('logo')} to="/">
          <SVG_Logo />
          <span className={cx('logoText')}>DiveSea</span>
        </Link>
        <nav className={cx('nav')}>
          <Link className={cx('link')} to="#!">
            Discover
          </Link>
          <Link className={cx('link')} to="#!">
            Creators
          </Link>
          <Link className={cx('link')} to="#!">
            Sell
          </Link>
          <Link className={cx('link')} to="#!">
            Stats
          </Link>
        </nav>
        <Button className={cx('connectButton')}>Connect Wallet</Button>
        <BurgerMenu
          className={cx('burgerMenu', { open: isMobileMenuOpen })}
          isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        />
      </div>

      <div className={cx('mobileMenu', { open: isMobileMenuOpen })}>
        <nav className={cx('mobileNav')}>
          <Link className={cx('link')} to="#!" onClick={toggleMobileMenu}>
            Discover
          </Link>
          <Link className={cx('link')} to="#!" onClick={toggleMobileMenu}>
            Creators
          </Link>
          <Link className={cx('link')} to="#!" onClick={toggleMobileMenu}>
            Sell
          </Link>
          <Link className={cx('link')} to="#!" onClick={toggleMobileMenu}>
            Stats
          </Link>
        </nav>
        <div className={cx('socialLinks')}>
          <Link to="#!" className={cx('socialLink')}>
            <SVG_Inst />
          </Link>
          <Link to="#!" className={cx('socialLink')}>
            <SVG_In />
          </Link>
          <Link to="#!" className={cx('socialLink')}>
            <SVG_Facebook />
          </Link>
          <Link to="#!" className={cx('socialLink')}>
            <SVG_Twitter />
          </Link>
        </div>
        <Button className={cx('mobileConnectButton')}>Connect Wallet</Button>
      </div>
    </header>
  );
};
