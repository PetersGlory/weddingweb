import Image from 'next/image';
import Link from 'next/link';
import styles from './services.module.scss';
import { joinClasses } from '@/helpers/css  ';

const data = [
  {
    title: "Groom's Stylist",
    description: 'Stylist',
    instagramLink: 'https://www.instagram.com/',
  },
  {
    title: "Bride's Stylist",
    description: 'Stylist',
    instagramLink: 'https://www.instagram.com/',
  },
  {
    title: 'Baker & Decorator',
    description: 'Baker',
    instagramLink: 'https://www.instagram.com/',
  },
  {
    title: "Bride's Hairstylist",
    description: 'Hair Stylist',
    instagramLink: 'https://www.instagram.com/',
  },
  {
    title: 'Makeup Artist',
    description: 'Artist',
    instagramLink: 'https://www.instagram.com/',
  },
];

const Services = () => (
  <div className={joinClasses([styles.services])} id="services">
    <div className="container-fluid">
      <div className="row justify-content-center">
        {data.map((user, index) => (
          <div className="col-sm-12 col-md-4 col-lg-2 mb-3 mb-md-0" key={index}>
            <div className="card card-body border-0 p-4 text-center">
              <div className="d-flex justify-content-center">
                <Link
                  className={styles.socialIconBg}
                  href={user.instagramLink}
                  target="_blank"
                >
                  <Image
                    alt="instagram"
                    height={20}
                    src="/images/instagram-logo-fill.svg"
                    width={20}
                  />
                </Link>
              </div>
              <div className="fw-bold my-2 lead">{user.description}</div>
              <div>{user.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
