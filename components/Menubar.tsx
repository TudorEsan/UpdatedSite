import { NextPage } from "next";
import Link from "next/link";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import styles from '../styles/menubar.module.css'

interface MenubarProps {
    isOpen: boolean
    onDismiss: (e: SyntheticEvent)=>void
    setIsOpen: any
}
 
const Menubar: NextPage<MenubarProps> = ({isOpen, onDismiss, setIsOpen}) => {
    const toggleMenuBar = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    
    return ( 
        <>
            <div onClick={toggleMenuBar} className={styles.icon}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                isOpen && (
                    <div className={styles.menubar}>
                    <Link href='/'>
                        <a onClick={onDismiss} className={styles.white}>Home</a>
                    </Link>
                    <Link href='/my-projects'>
                        <a onClick={onDismiss} className={styles.white}>Projects</a>
                    </Link>
                    <Link href='/more-about-me'>
                        <a onClick={onDismiss} className={styles.white}>About me!</a>
                    </Link>
                    <Link href='/contact'>
                        <a onClick={onDismiss} className={styles.white}>Contact</a>
                    </Link>
                    </div>
                )
                
            }
        </>
    );
}
 
export default Menubar;