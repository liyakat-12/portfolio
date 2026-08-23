import { projects } from '../data'
import Reveal, { SectionHeading } from './Reveal'
import { CheckIcon, StarIcon } from './icons'

export default function Projects() {
  return (
    <section id="projects" className="section-muted relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Projects"
          title="Selected projects"
          description="Applied machine learning and data science work across computer vision, recommendation systems, and databases."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="glass group relative h-full rounded-md p-7 transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-heading">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                  </div>
                  <span className="chip inline-flex shrink-0 items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold">
                    <StarIcon className="h-3 w-3" />
                    {project.highlight}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-body">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-body">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip rounded-sm px-2.5 py-1 font-mono text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
