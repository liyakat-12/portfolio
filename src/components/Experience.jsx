import { experiences } from '../data'
import Reveal, { SectionHeading } from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section-light relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Experience"
          title="Professional experience"
          description="Hands-on work in machine learning, deep learning, and data analysis."
        />

        <div className="relative mt-14 mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-700 md:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal
                key={`${exp.role}-${exp.company}-${i}`}
                delay={i * 100}
                className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'}`}
              >
                <span
                  className={`absolute left-2.5 top-6 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 ${
                    exp.current ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-400'
                  } md:left-auto ${i % 2 === 0 ? 'md:-right-[7px]' : 'md:-left-[7px]'}`}
                />
                <div className="glass ml-10 rounded-md p-6 transition-shadow hover:shadow-md md:ml-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-heading">{exp.role}</h3>
                    {exp.current && (
                      <span className="chip rounded-sm px-2.5 py-0.5 text-xs font-semibold">Current</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-accent">{exp.company}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">{exp.period}</p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
