import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async ()=>{
  const res = await fetch(`http://localhost:3000/api/posts`)
  
  if(!res.ok){
    throw notFound()
  }
  
  return res.json()
}
const Blog = async () => {
  'use cache'
  const posts = await getData()
  return (
    <div className={styles.mainContainer}>
      {posts.map((item) => (
        
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
              
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;