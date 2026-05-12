import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.container}>
      <div>©2026 Lamb. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/fb.png" width={15} height={15} alt="fb image" className={styles.icon}/>
        <Image src="/insta.png" width={15} height={15} alt="insta image" className={styles.icon}/>
        <Image src="/twitter.png" width={15} height={15} alt="twitter image" className={styles.icon}/>
        <Image src="/yt.png" width={15} height={15} alt="YT image" className={styles.icon}/>
      </div>
    
    </div>
  )
}

export default Footer