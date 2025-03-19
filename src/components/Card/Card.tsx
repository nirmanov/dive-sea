import React from 'react';
import { Button } from '../Button/Button';
import SVG_Eth from '../../assets/svg/ethereum.svg';
import s from './Card.module.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(s);

interface CardProps {
  title: string;
  time: string;
  price: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, time, price, image }) => {
  return (
    <div className={cx('card')}>
      <img className={cx('image')} src={image} alt="image" />
      <div className={cx('counter')}>{time}</div>
      <div className={cx('info')}>
        <h3 className={cx('title')}>{title}</h3>
        <div className={cx('infoRow')}>
          <div className={cx('bidGroup')}>
            <div className={cx('text')}>Current bid</div>
            <div className={cx('bid')}>
              <SVG_Eth />
              <span>{price}</span>
            </div>
          </div>
          <Button variant="card">PLACE BID</Button>
        </div>
      </div>
    </div>
  );
};
