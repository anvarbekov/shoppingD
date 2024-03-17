import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shopping',
  description: 'Modern Shopping Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>
                    Copyright © 2024 - All right reserved by Azimdaryo Usmonjon
                  </p>
                </footer>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
