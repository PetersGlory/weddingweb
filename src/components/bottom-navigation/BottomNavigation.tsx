import styles from './bottom-navigation.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const items = [
  { title: 'Invitation', icon: '' },
  { title: 'RSVP', icon: '' },
  { title: 'Calender', icon: '' },
  { title: 'Gift', icon: '' },
];

const BottomNavigation: FC = () => (
  <section
    className={joinClasses([
      styles.container,
      'fixed-bottom',
      'bg-white',
      'd-flex d-md-none',
      'justify-content-between',
    ])}
  >
    {items.map(item => (
      <div key={item.title}>{item.title}</div>
    ))}
  </section>
);

export default BottomNavigation;
