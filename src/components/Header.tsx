// src/components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-md">
      <h1 className="text-xl font-bold">Joel Shibu</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
