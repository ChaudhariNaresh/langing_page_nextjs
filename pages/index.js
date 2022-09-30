import Head from 'next/head';
import Image from 'next/image';
import Detail from '../components/Detail';
import Final from '../components/Final';
import { Header } from '../components/index';
import Main from '../components/Main';
import Network from '../components/Network';
import Price from '../components/Price';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div className="font-Inter">
      <Header />
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
