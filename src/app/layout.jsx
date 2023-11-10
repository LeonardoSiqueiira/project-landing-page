import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mariana Vieira',
  
  
}

export default function RootLayout({ children }) {
  return (<><html lang="pt-br">

      <body className={inter.className}>{children}</body>
    </html></>
  )
}
