import { NextPage } from "next";
import React from 'react'
import styles from '../styles/content.module.css'

interface ContentProps {
    children: React.ReactNode
}

const Content: NextPage<ContentProps> = ({ children }: ContentProps) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
}
 
export default Content;