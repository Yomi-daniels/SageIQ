'use client'

import React, { createContext, useContext, useState } from 'react'

const TermsContext = createContext()

export const TermsProvider = ({ children }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const openTerms = () => setIsTermsOpen(true)
  const closeTerms = () => setIsTermsOpen(false)

  return (
    <TermsContext.Provider value={{ isTermsOpen, openTerms, closeTerms }}>
      {children}
    </TermsContext.Provider>
  )
}

export const useTerms = () => {
  const context = useContext(TermsContext)
  if (!context) {
    throw new Error('useTerms must be used within TermsProvider')
  }
  return context
}
