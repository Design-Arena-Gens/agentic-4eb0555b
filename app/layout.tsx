import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Secret - हिंदी सारांश',
  description: 'द सीक्रेट पुस्तक का संपूर्ण हिंदी सारांश',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
