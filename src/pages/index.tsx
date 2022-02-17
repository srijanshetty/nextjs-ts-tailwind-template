import Head from 'next/head';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';

import Header from '../components/Header';

const Signup = () => {
  return (
    <Link href="/dashboard" passHref>
      <button className="mt-8 text-xl btn-basic bg-gradient">
        Join Waitlist
        <BsArrowRightShort className="inline w-6 h-6" />
      </button>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperFans</title>
      </Head>

      <Header />

      <div className="container flex items-center justify-center min-h-screen p-4 mx-auto mt-32 text-center">
        <main>
          <div className="">
            <h1 className="hidden mt-2 text-4xl font-bold uppercase drop-shadow-lg md:text-8xl text-gradient shadow-purple-500/50">
              SuperFans
            </h1>
            <Signup />
          </div>
        </main>
      </div>
    </>
  );
}
