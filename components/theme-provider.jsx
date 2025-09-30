'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,

} from 'next-themes'

export function ThemeProvider() {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
