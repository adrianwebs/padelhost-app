import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function Avatar({alt, src}) {
  return (
    <div className={styles.container}>
      <Image className={styles.avatar} alt={alt} src={src} title={alt} width='150px' height='150px' unoptimized='true' />
    </div>
  )
}

export default Avatar