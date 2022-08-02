import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MdDehaze as Hamburger, MdClose as Close } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';

import logo from '../../public/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    {
      title: 'home',
      link: '/',
    },
  ];

  const onHamburgerClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.overflowY = 'scroll';
    }
  }, [open]);

  return (
    <div
      className="fixed top-0 z-50 flex items-center justify-between w-full h-16 px-4 shadow-md bg-pitchBlack md:px-8"
      style={{
        backgroundColor: `black`,
      }}
    >
      <div className="relative flex items-center h-full">
        <Link href="/" passHref>
          <a className="relative block w-32 h-6">
            <Image
              src={logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
      </div>
      <div
        className={`md:hidden tablet:flex fixed -z-1 min-h-screen w-full p-8 bg-pitchBlack left-0 top-0 flex flex-col transform transition-transform ease-in-out duration-150 ${
          open ? 'translate-y-16' : '-translate-y-full'
        }`}
      >
        {links.map((link, index) => {
          return (
            <a
              href={link.link}
              className={`text-white text-lg mb-6 ml-4 ${
                router.route === link.link && 'text-gradient font-semibold'
              }`}
              key={index}
            >
              {link.title}
            </a>
          );
        })}
      </div>
      <div className="absolute hidden font-light md:flex w-max left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 2xl:gap-8 lg:gap-4">
        {/*{links.map((link, index) => {
          <Link href={link.link} key={index} passHref>
            <a
              className={`text-white ${
                router.route === link.link && 'text-gradient font-semibold'
              }`}
              key={index}
            >
              {link.title}
            </a>
          </Link>;
          })*/}
      </div>
      <div className="flex items-center md:hidden top-4 left-4">
        <Link href="/dashboard" passHref>
          <button
            className={`px-4 py-2 mr-3 text-sm font-semibold w-max btn-basic text-white bg-gradient`}
          >
            Launch App
            <BsArrowRightShort className="inline w-6 h-6" />
          </button>
        </Link>
        <a onClick={onHamburgerClick}>
          {!open ? (
            <Hamburger className="inline-block w-8 h-8 text-white md:w-10 md:h-10" />
          ) : (
            <Close className="inline-block w-8 h-8 text-white md:w-10 md:h-10" />
          )}
        </a>
      </div>
      <div className="items-center hidden w-max md:flex gap-2 2xl:gap-8 lg:gap-4">
        <Link href="/dashboard" passHref>
          <button className={`font-semibold btn-basic bg-gradient text-white`}>
            Launch App
            <BsArrowRightShort className="inline w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
