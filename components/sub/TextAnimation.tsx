"use client"
import { useScroll, useTransform, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef, RefObject } from 'react';
import Lenis from 'lenis';
import Picture1 from '../../public/1.jpg';
import Picture2 from '../../public/2.jpg';
import Picture3 from '../../public/3.jpg';

// Define props interfaces
interface SlideProps {
  src: StaticImageData;
  direction: 'left' | 'right';
  left: string;
  progress: any; // Adjust the type as per actual use
}

interface PhraseProps {
  src: StaticImageData;
}

// Main component
export default function Home() {
  const container: RefObject<HTMLDivElement> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });


  return (
    <main className="overflow-hidden">
      <div className='h-[10vh]' />
      <div ref={container}>
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress} />
        <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress} />
        <Slide src={Picture3} direction={'left'} left={"-65%"} progress={scrollYProgress} />
      </div>
      {/* <div className='h-[10vh]' /> */}
    </main>
  );
}

// Slide component
const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
  const translateX = useTransform(progress, [0, 1], [150 * (direction === 'left' ? -1 : 1), -150 * (direction === 'left' ? -1 : 1)]);
  return (
    <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
}

// Phrase component
const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className={'px-5 flex gap-10 items-center'}>
      <p className='text-[2.5vw] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects'>Front End Developer</p>
      <p className='text-[2.5vw] text-white'>Back End Developer</p>
      <span className="relative h-[4.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} alt="image" layout="fill" objectFit="cover" />
      </span>
    </div>
  )
}