import { NextPage } from "next";
import styles from '../styles/card.module.css'
interface CardProps {
    children: React.ReactNode
}
 
const Card: NextPage<CardProps> = ({children}) => {
    return ( 
        <div className={styles.card}>
            {children}
        </div>
     );
}
 
export default Card;