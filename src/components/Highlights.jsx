import { achievements } from '../data'
import Reveal, { SectionHeading } from './Reveal'
import { StarIcon } from './icons'

export default function Highlights() {
  return (
    <section id="highlights" className="section-light relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Leadership" title="Achievements & campus involvement" />

        <Reveal className="glass mx-auto mt-14 max-w-3xl rounded-md p-8">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-heading">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              <StarIcon className="h-4 w-4" />
            </span>
            Achievements & Leadership
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {achievements.map((item) => (
              <li key={item} className="chip flex gap-3 rounded-md px-4 py-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
