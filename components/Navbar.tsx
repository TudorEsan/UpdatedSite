import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/menubar.module.css'
import cn from 'classnames'
import { useRouter } from 'next/router'
import Menubar from "./Menubar"
import { useState } from "react"

const Navbar: NextComponentType = () => {
    const router = useRouter()
    const activePage = router.pathname;
    const [isOpen, setIsOpen] = useState(false)
    const onDismiss = () => {
        setIsOpen(false)
    }
    
    const openMenubar = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className={styles.container}>
                <Image priority className={styles.logo} src='/logo.svg' width={36} height={36} />
                <Link href='/'>
                    <a className={cn({
                        [styles.page]: true,
                        [styles.currentPage]: activePage === '/'  
                    })}>Home<br/></a>
                </Link>
                <Link href='/my-projects'>
                    <a className={cn({
                        [styles.page]: true,
                        [styles.currentPage]: activePage === '/my-projects'  
                    })}>My Projects <br/></a>
                </Link>
                <Link href='/more-about-me'>
                    <a className={cn({
                        [styles.page]: true,
                        [styles.currentPage]: activePage === '/more-about-me'  
                    })}>More About Me</a>
                </Link>
                <Link href='/contact'>
                    <a className={cn({
                        [styles.page]: true,
                        [styles.currentPage]: activePage === '/contact'  
                    })}>Contact</a>
                </Link>
                <Menubar isOpen={isOpen} onDismiss={onDismiss} setIsOpen={setIsOpen}/>
            </div>
            
        {isOpen && (
            <div onClick={onDismiss} className={styles.closingArea}></div>
        )}
        </>
    )
}

export default Navbar