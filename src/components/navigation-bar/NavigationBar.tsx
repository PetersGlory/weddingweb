import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo, { LOGO_COLOUR } from '@/widgets/logo/Logo  ';

const NavigationBar = () => {
  const { pathname } = useRouter();

  const [navbarColour, setNavbarColour] = useState('');
  const [navbarLogo, setNavbarLogo] = useState(LOGO_COLOUR.White);


  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo(LOGO_COLOUR.Blue);
      setNavbarColour('bg-white');
    } else {
      setNavbarLogo(LOGO_COLOUR.White);
      setNavbarColour('');
    }
  };

  useEffect(() => {
    changeLogo();
    window.addEventListener('scroll', changeLogo);
  });

  console.log(navbarColour);

  return (
    <nav
      className={`" d-flex justify-content-center gap-2 shadow p-3 ${navbarColour} fixed-top"`}
    >
      <Logo colour={navbarLogo} size={180} />
      <Link
        className={`nav-link py-2 px-3 ${pathname === '/' ? 'active' : ''}`}
        href={'/'}
      >
        Home
      </Link>
      <Link
        className={`nav-link py-2 px-3 ${
          pathname === '/gallery' ? 'active' : ''
        }`}
        href={'/gallery'}
      >
        Gallery
      </Link>
    </nav>
  );
};

export default NavigationBar;
