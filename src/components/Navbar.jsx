import { useEffect, useState } from 'react'
import { profile } from '../data'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './icons'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav
        className={`nav-shell mx-auto flex max-w-6xl items-center justify-between rounded-md px-5 py-3 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'glass glow-ring' : ''
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 font-display text-sm font-semibold text-white dark:bg-blue-600">
            LH
          </span>
          <span className="font-display text-sm font-semibold text-heading">
            Liyakat<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-body transition-colors hover-surface hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="theme-toggle"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="theme-toggle"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href={profile.resume} download className="btn-secondary !px-3.5 !py-2 text-sm">
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="theme-toggle !h-10 !w-10"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-2 md:hidden">
          <div className="glass glow-ring flex flex-col gap-1 rounded-md p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2.5 text-sm font-medium text-body hover-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="btn-secondary mt-1 justify-center"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
