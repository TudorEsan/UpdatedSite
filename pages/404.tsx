import { NextPage } from "next";
import Image  from 'next/image'
import styles from '../styles/error.module.css'
interface NotFoundProps {
    
}
 
const NotFound: NextPage<NotFoundProps> = () => {
    return (
        <div className={styles.grid}>
            <h1 className={styles.green}>404!</h1>
            <h2 className={styles.green}>You were not supposed to see this</h2>
            <Image className={styles.rounded}  src='/surprisedCat.gif' height={256} width={343}/>
        </div>
    );
}
 
export default NotFound;