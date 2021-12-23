import Image from 'next/image'
import React from 'react'
import styles from '../styles/project.module.css'

interface IProject {
    title: string,
    shortDesc: string,
    img: string,
    href: string
}

export const Project = React.forwardRef<any, IProject>(({ title, shortDesc, img, href }, ref) => {
    return (
        <a className={styles.link} href={href} ref={ref}>
            <div className={styles.flex}>
                <Image className={styles.img} src={img} alt='Project Image' height={170} width={310} />
                <div>
                    <h2 className={styles.subtitle}>{title}</h2>
                    <p className={styles.desc}>{shortDesc}</p>
                </div>
            </div>
        </a>
    )
})


export default Project