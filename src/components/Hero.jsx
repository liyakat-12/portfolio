import { profile, stats } from '../data'
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapIcon,
} from './icons'

export default function Hero() {
  return (
    <section id="home" className="hero-bg hero-border relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,#000,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="accent-kicker inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              Open to Data Science opportunities
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-heading sm:text-5xl lg:text-[3.25rem]">
              {profile.name.split(' ')[0]}{' '}
              <span className="text-accent">{profile.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="mt-4 text-lg font-semibold text-accent">{profile.role}</p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-body">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group">
                View projects
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={profile.resume} download className="btn-secondary">
                <DownloadIcon className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <MailIcon className="h-4 w-4" />
                Contact
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapIcon className="h-4 w-4 text-accent" />
                {profile.location}
              </span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <GitHubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="code-block p-5">
              <div className="flex items-center gap-2 border-b border-slate-600 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="ml-2 font-mono text-xs text-slate-400">data_scientist.py</span>
              </div>
              <pre className="overflow-x-auto pt-4 font-mono text-[13px] leading-relaxed text-slate-300">
                <code>
                  <span className="text-blue-300">class</span>{' '}
                  <span className="text-slate-100">DataScientist</span>:{'\n'}
                  {'  '}focus = <span className="text-emerald-300">"ML & Deep Learning"</span>{'\n'}
                  {'  '}stack = [<span className="text-emerald-300">"Python"</span>,{' '}
                  <span className="text-emerald-300">"Scikit-learn"</span>,{' '}
                  <span className="text-emerald-300">"PyTorch"</span>]{'\n'}
                  {'  '}skills = [<span className="text-emerald-300">"EDA"</span>,{' '}
                  <span className="text-emerald-300">"Model Evaluation"</span>]{'\n\n'}
                  {'  '}<span className="text-blue-300">def</span>{' '}
                  <span className="text-slate-100">solve</span>(self, data):{'\n'}
                  {'    '}<span className="text-blue-300">return</span>{' '}
                  <span className="text-emerald-300">"data-driven insights"</span>
                </code>
              </pre>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-md px-4 py-4 text-center">
                  <div className="font-display text-2xl font-semibold text-accent">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
