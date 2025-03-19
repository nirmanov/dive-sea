import { Link } from 'react-router-dom';
import SVG_Logo from '../../assets/svg/logo.svg';
import SVG_Inst from '../../assets/svg/inst.svg';
import SVG_In from '../../assets/svg/in.svg';
import SVG_Facebook from '../../assets/svg/facebook.svg';
import SVG_Twitter from '../../assets/svg/twitter.svg';
import s from './Footer.module.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(s);

export const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('row')}>
        <Link to="/" className={cx('logoLink')}>
          <SVG_Logo /> <span>DiveSea</span>
        </Link>
        <nav className={cx('nav')}>
          <Link to="#!" className={cx('navLink')}>
            Privacy Policy
          </Link>
          <Link to="#!" className={cx('navLink')}>
            Term & Conditions
          </Link>
          <Link to="#!" className={cx('navLink')}>
            About Us
          </Link>
          <Link to="#!" className={cx('navLink')}>
            Contact
          </Link>
        </nav>
      </div>
      <div className={cx('hr')} />
      <div className={cx('row')}>
        <div className={cx('coop')}>
          <span>© 2023</span>{' '}
          <span className={cx('coopHidden')}>DiveSea All Rights Reserved.</span>
        </div>
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
      </div>
    </footer>
  );
};
