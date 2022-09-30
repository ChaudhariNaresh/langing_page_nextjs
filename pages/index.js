import Head from 'next/head';
import Image from 'next/image';

import {
  Navbar,
  Main,
  Network,
  Price,
  Testimonial,
  Detail,
  Final,
} from '../components/index';

export default function Home() {
  return (
    <div className="font-Inter">
      <Navbar />
      <Main />
      <Detail />
      <Network />
      <Price />
      <Testimonial />
      <Final />

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}
