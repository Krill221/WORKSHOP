import { Inter } from 'next/font/google'
import App from './1_app/App'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <App />
}
