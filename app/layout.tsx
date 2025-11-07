
import '../styles/globals.css'; // <-- sahi path
import Header from '../components/Header'
export const metadata = { title: 'Garments Store', description: 'Free clothing eCommerce starter' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Header/><main className="container py-6">{children}</main></body></html>)
}
