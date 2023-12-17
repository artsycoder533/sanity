import Image from 'next/image'
import Portfolio from './components/portfolio/Portfolio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Portfolio />
    </main>
  )
}
