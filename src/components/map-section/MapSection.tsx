import styles from './map-section.module.scss';
import type { FC } from 'react';

const MapSection: FC = () => (
  <section className={styles.mapSection} id="maps">
    <div className="container">
      <h2 className="sectionTitle mb-4">Venues</h2>
      <div className="ratio ratio-16x9">
        <iframe
          allowFullScreen={true}
          height="380"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/d/embed?mid=1qSs-i4gRAnLhn7zyFtilSG78fJugdMc&ehbc=2E312F&callback=Function.prototype"
          style={{ border: 0 }}
          title="Church & Reception Locations"
          width="600"
        ></iframe>
      </div>
      <div className="d-flex justify-content-center"></div>
    </div>
  </section>
);

export default MapSection;
