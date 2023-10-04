import Image from 'next/image';
import styles from './our-love-story.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const OurLoveStory: FC = () => (
  <section className={styles.ourLoveStory} id="our-love-story">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-5 col-xxl-5 mb-4 mb-md-0">
          <h2 className="sectionTitle mb-4 px-4">Our Love Story</h2>
          <div className={joinClasses([styles.loveStoryText, 'px-md-4'])}>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  aria-controls="grooms-story"
                  aria-selected="true"
                  className="nav-link me-2 active"
                  data-bs-target="#grooms-story"
                  data-bs-toggle="pill"
                  id="grooms-story-tab"
                  role="tab"
                  type="button"
                >
                  Groom
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  aria-controls="brides-story"
                  aria-selected="false"
                  className="nav-link"
                  data-bs-target="#brides-story"
                  data-bs-toggle="pill"
                  id="brides-story-tab"
                  role="tab"
                  type="button"
                >
                  Bride
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                aria-labelledby="grooms-story-tab"
                className="tab-pane fade show active"
                id="grooms-story"
                role="tabpanel"
                tabIndex={0}
              >
                <p>
                  When I set my eyes on Wife on that day, I had a
                  never-felt-before feeling, I couldn&apos;t stop asking myself
                  who this beautiful lady was and I didn&apos;t waste any time
                  in making the necessary move. After a series of communications
                  with God and a couple of conversations with her, I became
                  further convinced she was the one. Her zeal for the things of
                  the Lord was stronger than mine :)
                </p>
                <p>
                  It&apos;s been a special and beautiful ride. Like Shania Twain
                  said:{' '}
                  <i>
                    &quot;We might have took the long way, we knew we&apos;d get
                    here someday&quot;
                  </i>
                </p>
                <p>Join me as I take it up a notch!</p>
              </div>
              <div
                aria-labelledby="brides-story-tab"
                className="tab-pane fade"
                id="brides-story"
                role="tabpanel"
                tabIndex={0}
              >
                <p>
                  On the first day when John approached me, I didn&apos;t like
                  him a bit. I neither wanted to talk to him nor agree to be his
                  friend because he wasn&apos;t my type. Funny right? I know,
                  haha.
                </p>
                <p>
                  I tried my best to avoid him, but it seemed like he was in a
                  special agreement with the Lord to arrest my mind. Fast
                  forward to weeks later... I wish I had accepted him earlier
                  because he turned out to be the quintessential lover; his
                  gentle but disciplined personality, humorous and sweet aura,
                  coupled with his intelligence, captured my heart.
                </p>
                <p>Every woman should pray to have an Olá in their life!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 d-none d-md-block">
          <div className={styles.imageContainer}>
            <Image
              alt={'couple'}
              className={styles.image}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={'/images/hero-2.jpeg'}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurLoveStory;
