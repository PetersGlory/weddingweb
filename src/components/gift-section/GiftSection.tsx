import { useState } from 'react';
import PaymentForm from './PaymentForm';
import styles from './gift-section.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const GiftSection: FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <section className={styles.parallax} id="gift-section">
      <div className="container align-items-center h-100 text-white">
        <div className="row h-100 align-items-center">
          <div className="text-center">
            <h2 className="sectionTitle mb-4">Cash Gift</h2>
            <div className={joinClasses(['fs-2 mb-4'])}>
              Your presence is more than enough for us! <br /> However, if you
              would love to send us a gift, kindly use the button below.
            </div>
            <div className="mb-4">
              <button
                className={joinClasses([styles.button, 'btn'])}
                data-bs-target="#paymentModal"
                data-bs-toggle="modal"
                type="button"
              >
                Send a gift
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        aria-labelledby="paymentModalLabel"
        className="modal fade"
        id="paymentModal"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Send a cash gift to John & Wife
              </h1>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={handleClose}
                type="button"
              ></button>
            </div>
            <div className="modal-body">
              <PaymentForm isClosed={isClosed} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
