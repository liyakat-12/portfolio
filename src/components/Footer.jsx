import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="footer-bar py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 font-display text-xs font-semibold text-white dark:bg-blue-600">
            LH
          </span>
          <span className="text-sm text-body">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        <p className="text-xs font-medium text-muted">Data Science Portfolio</p>

        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="theme-toggle" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="theme-toggle" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} className="theme-toggle" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
