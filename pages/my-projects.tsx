import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Header from '../components/Header'
import HeadLayout from '../components/HeadLayout'
import { IProject, PageInterface } from '../data/types'
import pageData from '../data/pageData'
import { Project } from '../components/Project'
import styles from '../styles/projects.module.css'
import projects from '../data/projects'
import Link from 'next/link'

interface IMyProjects extends PageInterface {
    projects: IProject[]
}


const MyProjects: NextPage<IMyProjects> = (props) => {

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
            <section className={styles.flex}>
                {
                    props.projects.map((proj) => (
                        <Link href={'/my-projects/' + proj.title.replaceAll(' ', '-')} key={proj.title} passHref>
                            <Project href='/my-projects/'  title={proj.title} img={proj.img} shortDesc={proj.shortDesc} />
                        </Link>
                    ))
                }
            </section>
        </>

    )
}


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { ...pageData.myProjects, projects: projects }
    }
}


export default MyProjects