import s from './ArtworkSection.module.scss';

import PNG_Art from '../../assets/rastr/ArtImg.png';

import { Button } from '../Button/Button';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

export const ArtworkSection = () => {
  return (
    <div className={cx('section')}>
      <div className={cx('content')}>
        <div className={cx('info')}>
          <h2 className={cx('title')}>Create and Sell NFTs</h2>
          <p className={cx('description')}>World’s Largest NFT Place</p>
          <div className={cx('btnsRow')}>
            <Button variant="white">Explore More</Button>
            <Button variant="white-border">Sell Artwork</Button>
          </div>
        </div>
        <div className={cx('image')}>
          <img src={PNG_Art} alt="Art" />
          <img className={cx('image__blur')} src={PNG_Art} alt="Art" />
        </div>
      </div>
    </div>
  );
};
