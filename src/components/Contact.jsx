import { profile } from '../data'
import Reveal from './Reveal'
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="section-muted relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="glass glow-ring relative overflow-hidden rounded-md px-6 py-14 text-center sm:px-12">
            <span className="accent-kicker">Contact</span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-heading sm:text-4xl">
              Let's connect on your next <span className="text-accent">data project</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
              Open to internships and full-time roles in Data Science, Machine Learning, and AI.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary group">
                <MailIcon className="h-4 w-4" />
                {profile.email}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-body">
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <PhoneIcon className="h-4 w-4 text-accent" />
                {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <LinkedInIcon className="h-4 w-4 text-accent" />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <GitHubIcon className="h-4 w-4 text-accent" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
