import styles from './write-a-message.module.scss';
import type { FC } from 'react';

const WriteAMessage: FC = () => (
  <section className={styles.writeAMessage} id="write-a-message">
    <div className="container">
      <h2 className="sectionTitle text-white mb-4">Write us a special note</h2>
      <div className="row align-items-center">
        <div className="col-sm-12 mb-4 text-center">
          <div className={styles.iframeContainer}>
            <iframe
              className={styles.iframe}
              height="530"
              src="https://docs.google.com/forms/d/e/1FAIpQLSe6twG-rzMkz5ntuRApVaCDYRBKZ3oaS_bGGRGRfij3F_LRdw/viewform?embedded=true&hl=en"
              title="write us a message"
              width="640"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WriteAMessage;
