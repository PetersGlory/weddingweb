import styles from './bible-verse.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const BibleVerse: FC = () => (
  <section className={styles.parallax}>
    <div className="container align-items-center h-100 text-white">
      <div className="row h-100 align-items-center">
        <div className="col-sm-12 text-center">
          <div className={joinClasses([styles.largeText, 'fw-bold mb-3'])}>
            &quot;For he himself is our peace, who has made the two groups
            one...&quot;
          </div>
          <div className="lead">- Ephesians 2:14</div>
        </div>
      </div>
    </div>
  </section>
);

export default BibleVerse;
