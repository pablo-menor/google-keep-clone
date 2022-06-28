import React from 'react'
import logo from '../logo.svg'
import firebaseLogo from '/firebase-logo.svg'

import styles from '../styles/header.module.css'
export const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="react logo" width={100}/>
        <img src={firebaseLogo} alt="firebase logo" width={60} />
        
    </div>
  )
}
