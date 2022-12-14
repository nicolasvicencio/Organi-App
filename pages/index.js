import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import { useAuth } from '../context/AuthContext'
import { useUsers } from '../context/UserContext'
import styles from '../styles/Home.module.css'
import Login from './login/Login'


export default function Home() {
  const {getSession, session} = useAuth() 
  const {getUserData} = useUsers()
  const router = useRouter()

  useEffect(() => {
    getSession()
    if(!session) return router.push('/login')
    if(session) {
      getUserData()
      router.push('/inicio')
    }
  },[session, getSession, getUserData, router])
  
  return (
      <main className='relative'>
        <Login />
      </main>
  )
}
