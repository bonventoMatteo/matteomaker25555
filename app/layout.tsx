import './globals.css' // Mantenha a importação do seu CSS global

export const metadata = {
  title: 'BONVENTO | Posicionamento & Conversão',
  description: 'Design cinematográfico que vende.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}