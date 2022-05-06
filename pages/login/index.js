import React, {useState, useEffect} from 'react'

import Link from 'next/link'

import FacebookOutlined from '@mui/icons-material/FacebookOutlined'
import Twitter from '@mui/icons-material/Twitter'
import Google from '@mui/icons-material/Google'

import styles from './login.module.css'
import { loginWithFacebook, loginWithGoogle, loginWithTwitter } from '../../firebase/client'

import { useRouter } from 'next/dist/client/router'

import useUser from '../../hooks/user/useUser'

export default function Login() {
  
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/dashboard')
  }, [user])

  const handleFacebook = () => {
    loginWithFacebook().catch((err) => (console.log(err)))
  }

  const handleTwitter = () => {
    loginWithTwitter().catch((err) => (console.log(err)))
  }

  const handleGoogle = () => {
    loginWithGoogle().catch((err) => (console.log(err)))
  }

  return (
    <div className={styles.login_container}>
        <div className={styles.login_content}>
            <div className={styles.login_title}>
                <Link href='../'><a className='text-decoration-none text-black'><h2>PADELHOST</h2></a></Link>
                <h3>Login</h3>    
            </div>
            <div className={styles.login_data}>
                {
                    user === null &&
                
                    <div className={styles.login_data}>
                        <label>Email Address</label>
                        <input placeholder='Type your Email' id='email' type='email'></input>
                        <label>Password</label>
                        <input placeholder='Type your Password' id='password' type='password'></input>
                        <a>Forgot password?</a>    
                        <button className={styles.login_button}>Login</button>
                        <span>Or Sign Up Using</span>
                        <div className={styles.login_buttons}>
                            <button onClick={handleFacebook} className={styles.login_facebook}><FacebookOutlined /></button>
                            <button onClick={handleTwitter} className={styles.login_twitter}><Twitter /></button>
                            <button onClick={handleGoogle} className={styles.login_google}><Google /></button>
                        </div>
                    </div>
                }
                {
                    user === undefined && <img src='/spinner.gif' />
                }
                
            </div>
            <div className={styles.login_footer}>
                <span>Don&apos;t have an account yet?</span>
                <a className='text-decoration-none text-black' href='#'>Register your Email</a>
            </div>
        </div>
    </div>
  )
}
