import React, { MouseEventHandler, useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Header from '../components/Header'
import HeadLayout from '../components/HeadLayout'
import { PageInterface } from '../data/types'
import pageData from '../data/pageData'
import styles from '../styles/aboutme.module.css'
import Image from 'next/image'
import authors from '../data/authors'


const Author: NextPage<Author> = ({ img, name, desc, favoriteBooks, favoriteIdeeas }) => {
    return (
        <div className={styles.container}>
            <Image src={img} height={172} width={156} />
            <h1>{name}</h1>
            <p >{desc}</p>
            <div className={styles.authorGrid}>
                <p className={styles.green + ' ' + styles.lightText}>FAVORITE BOOKS:</p>
                <p className={styles.lightText}>{favoriteBooks}</p>
                <p className={styles.green + ' ' + styles.lightText}>FAVORITE IDEAS:</p>
                <p className={styles.lightText}>{favoriteIdeeas}</p>
            </div>
        </div>
    )
}

interface Author {
    img: string;
    name: string;
    desc: string;
    favoriteBooks: string;
    favoriteIdeeas: string
}

interface IMoreAboutMe extends PageInterface {
    authors: Author[],
    setIsSorry: (s: string) => void
}

const MoreAboutMe: NextPage<IMoreAboutMe> = props => {
    const [option, setOption] = useState<string | null>(null)

    const setChoice = (e: React.MouseEvent, val: string) => {
        window.sessionStorage.setItem('choice', val)
        setOption(val)
        props.setIsSorry(val)
    }

    useEffect(() => {
        if (window) {
            const storage = sessionStorage
            console.log(storage.getItem)
            console.log('sfsdf', storage.getItem('choice'))
            setOption(window.sessionStorage.getItem('choice'))
        }
    }, [])

    return (
        <>
            <HeadLayout
                pageTitle={props.pageTitle}
                description={props.description}
            />
            <Header
                title={props.title}
                subtitle={props.subtitle}
                image={props.image}
                dimension={props.imageSize}
            />
            {
                option === null && (
                    <section>
                        <div className={styles.grid}>

                            <p>Do I do anything else besides coding?</p>
                            <div className={styles.buttons}>
                                <button onClick={(e) => setChoice(e, 'wrong')}>No way</button>
                                <button onClick={(e) => setChoice(e, 'right')}>Maybe</button>
                            </div>
                        </div>
                    </section>
                )
            }
            {
                option === 'right' && (
                    <section>
                        <div>
                            <h2 className={styles.center}>You guessed it!</h2>
                            <p className={styles.reply + ' ' + styles.center}>You guessed it! I do enjoy reading philosophy and psychology books, playing video games, and learning more about investments and money management.</p>
                        </div>
                        <div>
                            <h2 className={styles.green + ' ' + styles.underline + ' ' + styles.center}>Favorite Authors: </h2>
                        </div>
                        <div className={styles.flex}>
                            {
                                props.authors.map((author) => (
                                    <Author key={author.name}
                                        name={author.name}
                                        img={author.img}
                                        desc={author.desc}
                                        favoriteBooks={author.favoriteBooks}
                                        favoriteIdeeas={author.favoriteIdeeas} />
                                ))
                            }
                        </div>
                    </section>
                )
            }

        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { ...pageData.aboutMe, authors: authors }
    }
}


export default MoreAboutMe
