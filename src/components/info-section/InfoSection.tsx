import styles from './info-section.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const pageData = [
  {
    foreTitle: '01',
    title: 'Traditional',
    dateAndTime: '14th January, 2024  ||  4:00pm',
    venue: 'King of Peace Villa, Temidire Atoyebi Estate, Temidire, Ogbomoso.',
  },
  {
    foreTitle: '02',
    title: 'Church',
    dateAndTime: '15th January, 2024  ||  10:00am',
    venue: 'RCCG, Celebration Sanctuary, Oyo Province 5, Poat Area, Ogbomoso.',
  },
  {
    foreTitle: '03',
    title: 'Reception',
    dateAndTime: '15th January, 2024  ||  Immediately after Church Programme',
    venue:
      'Lagbami Osekun Civic Centre, Ogbomoso South Local Government, Sunsun, Ogbomoso.',
  },
];

const InfoSection: FC = () => (
  <section
    className={joinClasses([styles.infoSection, 'container'])}
    id="more-details"
  >
    <div className="row justify-content-md-center">
      {pageData.map((data, index) => (
        <div
          className={joinClasses([
            'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4 d-flex justify-content-stretch',
          ])}
          key={index}
        >
          <div className={styles.infoCard}>
            <div className={joinClasses([styles.roundedCircle, 'text-center'])}>
              {data.foreTitle}
            </div>
            <h3 className={styles.title}>{data.title}</h3>
            <div>{data.dateAndTime}</div>
            <div>{data.venue}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InfoSection;
