import { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import PNG_image1 from '../../assets/rastr/1.png';
import PNG_image2 from '../../assets/rastr/2.png';
import PNG_image3 from '../../assets/rastr/3.png';
import PNG_image4 from '../../assets/rastr/4.png';
import PNG_image5 from '../../assets/rastr/5.png';

import SVG_ArrowLeft from '../../assets/svg/arrow-left.svg';
import SVG_ArrowRight from '../../assets/svg/arrow-right.svg';

import s from './Slider.module.scss';

import classNames from 'classnames/bind';
import { Card } from '../Card/Card';
const cx = classNames.bind(s);

interface CardData {
  id: number;
  title: string;
  image: string;
  price: string;
  endTime: Date;
}

const getRandomPrice = () => {
  const basePrice = Math.random() * 14.99 + 0.01;
  return Number(basePrice).toFixed(2);
};

const getRandomEndTime = () => {
  const now = new Date();
  const endTime = new Date(
    now.getTime() + Math.random() * (24 - 1) * 60 * 60 * 1000 + 60 * 60 * 1000
  );
  return endTime;
};

const initialCards = [
  {
    id: 1,
    title: 'Sun-Glass',
    image: PNG_image1,
  },
  {
    id: 2,
    title: 'Sun-Glass',
    image: PNG_image2,
  },
  {
    id: 3,
    title: 'Sun-Glass',
    image: PNG_image3,
  },
  {
    id: 4,
    title: 'Sun-Glass',
    image: PNG_image4,
  },
  {
    id: 5,
    title: 'Sun-Glass',
    image: PNG_image5,
  },
];

const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className={cx('sliderNav')}>
      <button className={cx('sliderBtn')} onClick={() => swiper.slidePrev()}>
        <SVG_ArrowLeft />
      </button>
      <div className={cx('sliderBtnHr')}></div>
      <button className={cx('sliderBtn')} onClick={() => swiper.slideNext()}>
        <SVG_ArrowRight />
      </button>
    </div>
  );
};

export const Slider = () => {
  const [cards] = useState<CardData[]>(() => {
    const initialData = initialCards.map((card) => ({
      ...card,
      price: getRandomPrice(),
      endTime: getRandomEndTime(),
    }));

    return [...initialData, ...initialData, ...initialData].map((card, index) => ({
      ...card,
      id: card.id + index * initialCards.length,
    }));
  });

  const [timers, setTimers] = useState<{ [key: number]: string }>({});

  const calculateTimeLeft = useCallback((endTime: Date) => {
    const now = new Date();
    const difference = endTime.getTime() - now.getTime();

    if (difference <= 0) {
      return 'Auction ended';
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, '0')}h ${minutes
      .toString()
      .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimers = cards.reduce(
        (acc, card) => {
          acc[card.id] = calculateTimeLeft(card.endTime);
          return acc;
        },
        {} as { [key: number]: string }
      );

      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cards, calculateTimeLeft]);

  return (
    <section className={cx('section')}>
      <h2 className={cx('title')}>Weekly - Top NFT</h2>
      <div className={cx('sliderWrapper')}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          speed={500}
          centeredSlides={true}
          className={cx('slider')}
          breakpoints={{
            320: {
              spaceBetween: 32,
            },
            600: {
              spaceBetween: 32,
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className={cx('slide')}>
              <Card
                title={card.title}
                time={timers[card.id] || ''}
                price={card.price}
                image={card.image}
              />
            </SwiperSlide>
          ))}
          <SliderNavigation />
        </Swiper>
      </div>
    </section>
  );
};
