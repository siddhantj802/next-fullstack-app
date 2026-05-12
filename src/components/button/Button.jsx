import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'
function Button({url , text}) {
  return (
    <Link href={url}>
        <button className={styles.container}>
            {text}
        </button>
    </Link>
  )
}

export default Button