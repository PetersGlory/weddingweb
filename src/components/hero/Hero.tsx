import Image from 'next/image';
import styles from './hero.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const invitationCard = '/images/iv-card.jpg';

const Hero: FC = () => (
  <section className={joinClasses([styles.heroBg])} id="invitation-and-rsvp">
    <div className="container-fluid h-100">
      <div className="row align-items-end h-100 pb-5">
        <div className="col-sm-12 text-center">
          <h2 className={joinClasses([styles.title, 'sectionTitle mb-2'])}>
            John & Wife
          </h2>
          <div className="d-flex justify-content-center gap-2">
            <div>
              <button
                className={joinClasses([styles.button, 'btn'])}
                data-bs-target="#exampleModal"
                data-bs-toggle="modal"
                type="button"
              >
                Invitation e-Card
              </button>
            </div>
            <div>
              <a
                className={joinClasses([styles.button, 'btn bgPrimary'])}
                href="https://forms.gle/jGkaE19S9hNRuXKr9"
                target="_blank"
                type="button"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      aria-hidden="true"
      aria-labelledby="exampleModalLabel"
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          <div className={styles.imageContainer}>
            <Image
              alt="invitation-card"
              className={styles.image}
              fill
              src={invitationCard}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              aria-label="Close"
              className="btn text-white text-center"
              data-bs-dismiss="modal"
              type="button"
            >
              <span className="fs-1 fw-bold">x</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
