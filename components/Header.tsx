import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { fadeInUp, imageAnimation, stagger } from "../data/motion-animation";
import styles from "../styles/header.module.css";

interface HeaderProps {
  image: string;
  title: string;
  subtitle: string;
  dimension?: {
    height: number;
    width: number;
  };
}


const Header: NextPage<HeaderProps> = ({
  image,
  title,
  subtitle,
  dimension,
}) => {
  return (
    <div className={styles.flex}>
      <div>
        <motion.h1 variants={fadeInUp} initial='initial' animate='animate'>{title}</motion.h1>
        <motion.h2 variants={fadeInUp} initial='initial' animate='animate'>
          {subtitle}
        </motion.h2>
      </div>
      <motion.div variants={imageAnimation} initial='initial' animate='enter' className={styles.hero}>
        <Image
          alt="hero"
          priority
          src={image}
          width={dimension ? dimension.width : 471}
          height={dimension ? dimension.height : 471}
        />
      </motion.div>
    </div>
  );
};

export default Header;
