import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/myProjects";
import { IProject } from "../../data/types";
import style from '../../styles/project.module.css'


interface IPost {
    proj: IProject
}

const Project: NextPage<IPost> = ({ proj }) => {
    return (
        <div className={style.container}>
            <h2>

                <Link href='/my-projects'>
                    <a className={style.titleLink}>Projects &gt; </a>
                </Link>
                {proj.title}
            </h2>
            <div className={style.imgCont}>

                <Image priority src={proj.img} width={620} height={360} />
            </div>
            <p className={style.indent}>{proj.desc}</p>
            <h2>What I&apos;ve learned:</h2>
            <ul>
                {
                    proj.learnedAbilities.map((ability, index) => (
                        <li key={index} className={style.list}>{ability}</li>
                    ))
                }
            </ul>
            <p className={style.green}>Github Link: <a className={style.link} href={proj.github}>{proj.github}</a></p>
            {proj.link && (
                <p className={style.green}>Project Link: <a className={style.link} href={proj.link}>{proj.link}</a></p>
            )}

        </ div>
    )
}

export async function getStaticPaths() {

    const paths = projects.map((proj: IProject) => {
        return {
            params: {
                id: proj.title.replace(/\s/g, '-')
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {


    const project = projects.find((proj: IProject) => params?.id === proj.title.replace(/\s/g, '-'))

    return {
        props: {
            proj: project
        }
    }
}

export default Project