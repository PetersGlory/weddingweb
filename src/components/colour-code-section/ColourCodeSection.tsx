import { useEffect, useState } from 'react';
import styles from './colour-code-section.module.scss';
import type { FC } from 'react';

const data = [
  {
    title: 'Traditional Wedding',
    colours: 'White & Sky blue',
    codes: ['#FFFFFF', '#87ceeb'],
  },
  {
    title: 'Church & Reception',
    colours: 'Sky blue & Silver',
    codes: ['#87ceeb', '#C3C7C7'],
  },
];

const ColourCodeSection: FC = () => {
  const [pageData, setPageData] = useState(data);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // This forces a rerender, so the location is rendered
    // the second time but not the first
    setHydrated(true);
    setPageData(data);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <section className={styles.colourCodeSection} id="colour-codes">
      <div className="container">
        <h2 className="sectionTitle mb-4">Colours</h2>
        <div className="row align-items-center justify-content-center">
          {pageData.map((data, index) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4 text-center"
              key={index}
            >
              <h3 className={styles.title}>{data.title}</h3>
              <div>{data.colours}</div>
              <div className={styles.colourBoxWrapper}>
                {data?.codes?.map((code, index) => (
                  <span
                    className={styles.colourBox}
                    key={index}
                    style={{
                      backgroundColor: code,
                      border: code === '#FFFFFF' ? '1px solid' : '',
                    }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColourCodeSection;
