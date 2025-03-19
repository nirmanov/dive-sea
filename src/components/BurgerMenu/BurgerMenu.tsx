import s from './burger-menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const BurgerMenu = ({ isOpen, onClick, className }: BurgerMenuProps) => {
  return (
    <button className={cx('burger', { open: isOpen }, className)} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
