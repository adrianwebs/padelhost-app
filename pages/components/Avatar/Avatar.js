import React from 'react'

import styles from './styles.module.css'

function Avatar({alt, src}) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} alt={alt} src={src} title={alt} />
    </div>
  )
}

export default Avatar