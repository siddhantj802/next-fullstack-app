import React from 'react'
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async(id) =>{
    'use cache'
  const res = await fetch( `https://fakestoreapi.com/products/${id}`)

  if(!res.ok){
     notFound()
  }

  return res.json()
}

async function BlogPost({ params }) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desciption}
          </p>
          <div className={styles.author}>
            {/* <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            /> */}
            {/* <span className={styles.username}>{data.username}</span> */}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost