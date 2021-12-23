import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from '../styles/upset.module.css'
import Header from "./Header";
import Layout from "./Layout";

interface IUpset {
    setIsSorry: (v: string) => void;
}

const Upset: NextPage<IUpset> = ({ setIsSorry }) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()


    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(value.indexOf('sorry') != -1) {
            sessionStorage.setItem('choice', 'right')
            setIsSorry('right')
            router.push('/more-about-me')
        } else {
            setError(true)
        }
    }

    return (
        <Layout>
            <Header image="/demolitionCat.gif" title='I am very offended!' subtitle="Please tell me you’re sorry if you want to browse my webpage ever again" dimension={{ height: 300, width: 500 }} />
            <form onSubmit={(e) => onSubmit(e)}>
                <textarea value={value} onChange={e => onChange(e)} name='appology' placeholder="Tell me you are sorry" />
                {
                    error && (
                        <p>Must contain &apos;sorry&apos;</p>
                    )
                }
                <button type='submit'>Send Appology</button>
            </form>
            
        </Layout>
    )
}

export default Upset