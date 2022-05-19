import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function Avatar({alt, src}) {
  return (
    <div className={styles.container}>
      <Image className={styles.avatar} alt={alt} src={src} title={alt} width='250px' height='250px' unoptimized='true' />
    </div>
  )
}

export default Avatar