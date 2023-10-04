import Image from 'next/image';
import styles from './gallery.module.scss';
import type { FC } from 'react';

const images = [
  { url: '/images/hero-7.jpeg', title: 'Wife & John' },
  { url: '/images/hero-1.jpeg', title: 'Wife' },
  { url: '/images/hero-4.jpeg', title: 'John' },
  { url: '/images/hero-3.jpeg', title: 'Wife & John' },
];

const Gallery: FC = () => (
  <section className={styles.gallery} id="gallery">
    <div className="container-fluid">
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div className="col-sm-12 col-md-6 col-lg-3 p-1" key={index}>
            <div className={styles.imageContainer}>
              <Image
                alt={image.title}
                blurDataURL={image.url}
                className={styles.image}
                fill
                placeholder="blur"
                priority={false}
                quality={75}
                sizes="(max-width: 576px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={image.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
