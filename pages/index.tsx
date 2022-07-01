import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Card from '../components/Card'
import { differenceInCalendarYears, differenceInCalendarMonths, differenceInCalendarDays} from 'date-fns'
import HeadLayout from '../components/HeadLayout'
import pageData from '../data/pageData'
import Header from '../components/Header'
import { PageInterface } from '../data/types'

const Home: NextPage<PageInterface> = (props) => {
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
      <HeadLayout pageTitle={props.pageTitle} description={props.description} />
      <Header
        title={props.title}
        subtitle={props.subtitle}
        image={props.image}
      />
      <section>
        <h2 className={styles.centered}>Bio</h2>
        <div className={styles.grid}>
          <Image
            quality={100}
            src="/sibiu.svg"
            height={107}
            width={107}
            alt="Sibiu Logo"
          />
          <div className={styles.divider}></div>
          <Image
            quality={100}
            src="/brukenthal.svg"
            height={107}
            width={107}
            alt="Brukenthal Photo"
          />
          <div className={styles.divider}></div>
          <Image
            quality={100}
            src="/ubb.svg"
            height={107}
            width={107}
            alt="Ubb University Logo"
          />
          <p>
            Born in Sibiu {date.years} years and {date.months} months ago.
          </p>
          <p>
            Went to the german taught Brukenthal high school, where I was part of mathematics and
            computer science class
          </p>
          <p>
            I currently study at &quot;Babes Bolyai&quot; Faculty of Mathematics
            and Computer Science
          </p>
        </div>
      </section>
      <section>
        <Card>
          <div className={styles.heading}>
            <Image
              className={styles.me}
              src="/MyPhoto.jpg"
              objectFit="cover"
              height={150}
              width={150}
              alt='photo of myself'
            />
            <p className={styles.white}>Me!</p>
          </div>
          <p className={styles.white}>
            I’m passionate about programming and ways in which technology can
            improve our everyday lives. I find Computer Science interesting,
            since abstracting real-world problems into code is very fascinating.
          </p>
        </Card>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...pageData.home
    }
  }
}

export default Home
