'use client'

import React, { createContext, useContext, useState } from 'react'

const PrivacyContext = createContext()

export const PrivacyProvider = ({ children }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  const openPrivacy = () => setIsPrivacyOpen(true)
  const closePrivacy = () => setIsPrivacyOpen(false)

  return (
    <PrivacyContext.Provider value={{ isPrivacyOpen, openPrivacy, closePrivacy }}>
      {children}
    </PrivacyContext.Provider>
  )
}

export const usePrivacy = () => {
  const context = useContext(PrivacyContext)
  if (!context) {
    throw new Error('usePrivacy must be used within PrivacyProvider')
  }
  return context
}
