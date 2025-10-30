import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const navLinkBase = 'text-sm md:text-base px-3 py-2 rounded-md hover:bg-[var(--brand-accent)]/20 transition';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-accent)]/40 bg-[var(--brand-bg)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--brand-bg)]/60">
      <div className="container-wide flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/Images/favicon.jpg" alt="TMHSS logo" className="inline-block h-8 w-8 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-semibold">Thangamani Matriculation Higher Secondary School</div>
            <div className="text-xs subtitle">Pattabiram, Chennai</div>
          </div>
        </NavLink>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={({isActive}) => isActive ? navLinkBase + ' bg-[var(--brand-accent)]/30' : navLinkBase}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? navLinkBase + ' bg-[var(--brand-accent)]/30' : navLinkBase}>About</NavLink>
          <NavLink to="/academics" className={({isActive}) => isActive ? navLinkBase + ' bg-[var(--brand-accent)]/30' : navLinkBase}>Academics</NavLink>
          <NavLink to="/admissions" className={({isActive}) => isActive ? navLinkBase + ' bg-[var(--brand-accent)]/30' : navLinkBase}>Admissions</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? navLinkBase + ' bg-[var(--brand-accent)]/30' : navLinkBase}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? navLinkBase + ' bg-[var(--brand-accent)]/30' : navLinkBase}>Contact</NavLink>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-[var(--brand-accent)] px-3 py-2 text-sm" onClick={() => setOpen((v) => !v)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--brand-accent)]/40 bg-[var(--brand-bg)]">
          <nav className="container-wide py-2 grid">
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => (isActive ? 'bg-[var(--brand-accent)]/30' : '') + ' px-3 py-2 rounded-md'}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({isActive}) => (isActive ? 'bg-[var(--brand-accent)]/30' : '') + ' px-3 py-2 rounded-md'}>About</NavLink>
            <NavLink to="/academics" onClick={closeMenu} className={({isActive}) => (isActive ? 'bg-[var(--brand-accent)]/30' : '') + ' px-3 py-2 rounded-md'}>Academics</NavLink>
            <NavLink to="/admissions" onClick={closeMenu} className={({isActive}) => (isActive ? 'bg-[var(--brand-accent)]/30' : '') + ' px-3 py-2 rounded-md'}>Admissions</NavLink>
            <NavLink to="/gallery" onClick={closeMenu} className={({isActive}) => (isActive ? 'bg-[var(--brand-accent)]/30' : '') + ' px-3 py-2 rounded-md'}>Gallery</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => (isActive ? 'bg-[var(--brand-accent)]/30' : '') + ' px-3 py-2 rounded-md'}>Contact</NavLink>
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}



