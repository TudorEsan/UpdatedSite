import { NextPage } from "next";
import Header from "../components/Header";
import HeadLayout from "../components/HeadLayout";
import { PageInterface } from "../data/types";
import pageData from '../data/pageData'
import Image from 'next/image'
import styles from '../styles/contact.module.css'
import { ChangeEventHandler, SyntheticEvent, useState } from "react";
import emailjs from 'emailjs-com'

const Contact: NextPage<PageInterface> = (props) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const reset = () => {
        setForm({
          name: "",
          email: "",
          message: "",
        });
    }

    const onChange = (e: any) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
    const onSubmit = async (e: any) => {
        e.preventDefault()
        emailjs.init("user_AMGJ2p5N2MwxeqeXtJNLW");
        const resp = await emailjs.send(
        "service_2hogqhq",
        "template_223rjog",
        form
      );
      console.log(resp);
      reset();
    };

    
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
          <div>
            <form onSubmit={onSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                type="text"
                placeholder="From: "
              />
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                type="text"
                placeholder="Email: "
              />
              <textarea
                value={form.message}
                onChange={onChange}
                name="message"
                placeholder="Message: "
              />
              <button type="submit">Send it!</button>
            </form>
          </div>
          <div>
            <h2>You can find me online at</h2>
            <div className={styles.mediaLinks}>
              <Image src="/Mail.svg" width={41} height={28} />
              <a href="mailto:tudor.esan@icloud.com">tudor.esan@icloud.com</a>
            </div>
            <div className={styles.mediaLinks}>
              <Image src="/phone.svg" width={38} height={38} />
              <a href="tel:+40757491686">+40 757 491 686</a>
            </div>
            <div className={styles.mediaLinks}>
              <Image src="/instagram.svg" width={35} height={38} />
              <a href="https://www.instagram.com/tudoresan/">@tudoresan</a>
            </div>
            <div className={styles.mediaLinks}>
              <Image src="/github.svg" width={38} height={38} />
              <a href="https://github.com/tudoresan">tudoresan</a>
            </div>
          </div>
        </section>
      </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            ...pageData.contact
        }
    }
}
 
export default Contact;