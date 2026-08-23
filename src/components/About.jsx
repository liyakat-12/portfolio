import { profile, education, topSkills } from '../data'
import Reveal, { SectionHeading } from './Reveal'
import { CheckIcon } from './icons'

const focus = [
  'Machine Learning & Deep Learning',
  'Data Preprocessing & EDA',
  'Model Evaluation & Tuning',
  'Feature Engineering',
]

export default function About() {
  return (
    <section id="about" className="section-muted relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="About"
          title="Data-driven problem solving"
          description="Building analytical skills into production-ready machine learning solutions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="glass rounded-md p-8">
            <p className="text-base leading-relaxed text-body sm:text-[1.05rem]">{profile.summary}</p>

            <div className="mt-6 border-t border-theme pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Core competencies
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span key={skill} className="chip rounded-sm px-3 py-1.5 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {focus.map((item) => (
                <div key={item} className="chip flex items-center gap-3 rounded-md px-4 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-heading">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="glass rounded-md p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Education</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-heading">{education.degree}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{education.institution}</p>
            <p className="chip mt-3 rounded-sm px-3 py-2 text-xs font-semibold">
              Final year · 8th semester
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-theme pt-5">
              <div>
                <div className="text-xs font-medium text-muted">Duration</div>
                <div className="mt-1 text-sm font-semibold text-heading">{education.period}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-muted">CGPA</div>
                <div className="mt-1 font-display text-lg font-semibold text-accent">{education.cgpa}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
