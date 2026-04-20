"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <div className={styles.container}>
      <div><Link href="/" className={styles.logo}>Lamamia</Link></div>
      <div className={styles.links}>
        {links.map((link)=>(
            <Link href={link.url} key={link.id}>{link.title}</Link>
          ))
        }
        <button onClick={()=>(console.log('logged out'))}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar