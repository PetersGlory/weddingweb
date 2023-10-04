import styles from './footer.module.scss';
import type { FC } from 'react';
import Logo, { LOGO_COLOUR } from '@/widgets/logo/Logo  ';

const date = new Date();

const Footer: FC = () => {
  const pageData = [
    { ref: '#invitation-and-rsvp', label: 'Invitation & RSVP' },
    { ref: '#countdown', label: 'Countdown' },
    { ref: '#event-details', label: 'Event Details' },
    { ref: '#colour-codes', label: 'Colour Codes' },
    { ref: '#our-love-story', label: 'Our love story' },
    { ref: '#gift-section', label: 'Gifts' },
    { ref: '#gallery', label: 'Gallery' },
    { ref: '#write-a-message', label: 'Write us a special note' },
    { ref: '#messages', label: 'Messages' },
    { ref: '#maps', label: 'Venue Locations' },
    { ref: '#services', label: 'Professionals' },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center justify-content-md-end mb-5 mb-md-0 pe-md-5">
            <Logo colour={LOGO_COLOUR.White} size={180} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-start ps-md-5">
            <div className="lead mb-2 fw-bold">Quick Links</div>
            {pageData.map(data => (
              <span key={data.label}>
                <a className={styles.link} href={data.ref}>
                  {data.label}
                </a>
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center small bg-black p-3">
        @ {date.getFullYear()} by John & Wife
      </div>
    </footer>
  );
};

export default Footer;
