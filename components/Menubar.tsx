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
    
    const onBlur = (e: SyntheticEvent) => {
        e.preventDefault()
        console.log('sdfsdf')
    }
    return ( 
        <>
            <div onBlur={onBlur} onClick={toggleMenuBar} className={styles.icon}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                isOpen && (
                    <div className={styles.menubar}>
                    <Link href='/'>
                        <p onClick={onDismiss} className={styles.white}>Home</p>
                    </Link>
                    <Link href='/my-projects'>
                        <p onClick={onDismiss} className={styles.white}>Projects</p>
                    </Link>
                    <Link href='/more-about-me'>
                        <p onClick={onDismiss} className={styles.white}>About me!</p>
                    </Link>
                    <Link href='/contact'>
                        <p onClick={onDismiss} className={styles.white}>Contact</p>
                    </Link>
                    </div>
                )
                
            }
        </>
    );
}
 
export default Menubar;