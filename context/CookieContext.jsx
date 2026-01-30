'use client'

import React, { createContext, useContext, useState } from 'react'

const CookieContext = createContext()

export const CookieProvider = ({ children }) => {
  const [isCookieOpen, setIsCookieOpen] = useState(false)

  const openCookie = () => setIsCookieOpen(true)
  const closeCookie = () => setIsCookieOpen(false)

  return (
    <CookieContext.Provider value={{ isCookieOpen, openCookie, closeCookie }}>
      {children}
    </CookieContext.Provider>
  )
}

export const useCookie = () => {
  const context = useContext(CookieContext)
  if (!context) {
    throw new Error('useCookie must be used within CookieProvider')
  }
  return context
}
