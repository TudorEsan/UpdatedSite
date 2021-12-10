import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Content from '../components/Content'
import styles from '../styles/home.module.css'
import typo from '../styles/typography.module.css'
import Image from 'next/image'
import Card from '../components/Card'
import { differenceInCalendarYears, differenceInCalendarMonths, differenceInCalendarDays} from 'date-fns'

const Home: NextPage = () => {
  const [date, setDate] = useState({
    years: 0,
    months: 0
  })
  const myBirthDay = new Date('06/22/2002')

  const getDateDiff = (d1: Date, d2: Date) => {
      const result = {
        years: 0,
        months: 0,
      }
      result.years = differenceInCalendarYears(d1, d2)
      result.months = differenceInCalendarMonths(d1, d2) - result.years * 12
      return result
  }

  const updateDate = () =>  {
    const now = new Date()
    setDate(getDateDiff(now, myBirthDay))
  }

  useEffect(() => {
    updateDate()
  }, [])

  return (
    <>
      <Head>
        <title>Hi!</title>
      </Head>
      <div className={styles.flex}>
        <div>
          <h1>Hello World!</h1>
          <h2>Welcome to my Website.</h2>
        </div>
        <div className={styles.hero}>
          <Image priority={true} src='/Hero.svg' width={471}  height={471} />
        </div>
      </div>
      <section >
        <h2 className={styles.centered}>Bio</h2>
        <div className={styles.grid}>
          <Image src='/sibiu.svg' height={107} width={107}/>
          <div className={styles.divider}></div>
          <Image src='/brukenthal.svg' height={107} width={107}/>
          <div className={styles.divider}></div>
          <Image src='/ubb.svg' height={107} width={107}/>
          <p>Born in Sibiu {date.years} years {date.months} months ago.</p>
          <p>Went to Brukenthal Highschool, where I was part of mathematics and computer science class</p>
          <p>Currently i study at Babes Bolyai Faculty of Mathematics and Computer Science</p>
        </div>
      </section>
      <section>
        <Card>
          <div className={styles.heading}>
            <Image className={styles.me} objectPosition='0px -13px' src='/MyPhoto.jpg' objectFit='cover' height={150} width={150} />
            <p className={styles.white}>Me!</p>
          </div>
          <p className={styles.white}>I’m passionate about programming and ways in which technology can improve our everyday lives. I find Computer Science interesting, since abstracting real world problems into code is very fascinating.</p>
        </Card>
      </section>
      
    </>
  )
}

export default Home
