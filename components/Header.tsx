import { NextPage } from "next";
import Image from 'next/image'
import styles from '../styles/header.module.css'

interface HeaderProps {
    image: string;
    title: string;
    subtitle: string;
    dimension?: {
        height: number;
        width: number;
    }
}
 
const Header: NextPage<HeaderProps> = ({image, title, subtitle, dimension}) => {
    console.log(image)
    
    return (
      <div className={styles.flex}>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className={styles.hero}>
          <Image
            alt='hero'
            priority
            src={image}
            width={dimension ? dimension.width : 471}
            height={dimension ? dimension.height : 471}
          />
        </div>
      </div>
    );
}
 
export default Header;