import { UserButton } from '@clerk/nextjs'
import React from 'react'


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <UserButton afterSignOutUrl="/" />
  )
}

export default Layout