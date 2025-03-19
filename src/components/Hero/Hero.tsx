import { useRef } from 'react';

import s from './Hero.module.scss';

import PNG_Img1 from '../../assets/rastr/hero-img1.png';
import PNG_Img2 from '../../assets/rastr/hero-img2.png';
import SVG_Arrow from '../../assets/svg/hero-arrow.svg';
import SVG_Mesh from '../../assets/svg/hero-mesh.svg';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Button } from '../Button/Button';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

gsap.registerPlugin(useGSAP);

export const Hero = () => {
  const textContainer = useRef(null);
  const imgContainer = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          `.${cx('title')}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, delay: 0.2, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo(
          `.${cx('description')}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo(
          `.${cx('btnsRow')}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo(
          `.${cx('counters')}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
    },
    { scope: textContainer }
  );

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(`.${cx('image1')}`, { x: 800 }, { x: 0, duration: 0.9, ease: 'power2.out' })
        .fromTo(
          `.${cx('image2')}`,
          { opacity: 0, x: 200 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo(
          `.${cx('arrow')}`,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
    },
    { scope: imgContainer }
  );

  return (
    <div className={cx('hero')}>
      <div className={cx('info')} ref={textContainer}>
        <div className={cx('over')}>
          <span className={cx('overHr')}></span>
          <span>OVER 1M CREATORS</span>
        </div>
        <h1 className={cx('title')}>Discover And Create NFTs</h1>
        <p className={cx('description')}>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get
          a <span>$20 bonus</span>.
        </p>
        <div className={cx('btnsRow')}>
          <Button variant="dark">Explore More</Button>
          <Button variant="dark-border">create NFT</Button>
        </div>
        <div className={cx('counters')}>
          <div className={cx('counter')}>
            <span className={cx('value')}>430K+</span>
            <span className={cx('attr')}>Art Works</span>
          </div>
          <div className={cx('counter')}>
            <span className={cx('value')}>159K+</span>
            <span className={cx('attr')}>Creators</span>
          </div>
          <div className={cx('counter')}>
            <span className={cx('value')}>87K+</span>
            <span className={cx('attr')}>Collections</span>
          </div>
        </div>
      </div>
      <div className={cx('images')} ref={imgContainer}>
        <div className={cx('mesh')}>
          <SVG_Mesh />
        </div>
        <div className={cx('image1')}>
          <img src={PNG_Img1} alt="img" />
        </div>
        <div className={cx('image2')}>
          <img src={PNG_Img2} alt="img" />
        </div>
        <div className={cx('arrow')}>
          <SVG_Arrow />
        </div>
      </div>
    </div>
  );
};
