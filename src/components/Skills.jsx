import {
  SiPython,
  SiC,
  SiCplusplus,
  SiMysql,
  SiMongodb,
} from 'react-icons/si'
import { skills } from '../data'
import Reveal, { SectionHeading } from './Reveal'

const coreStack = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'C', Icon: SiC, color: '#00599C' },
  { name: 'C++', Icon: SiCplusplus, color: '#004482' },
  { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-light relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Skills"
          title="Technical skills"
          description="Languages, frameworks, and tools used across data science and machine learning workflows."
        />

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {coreStack.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="glass group flex w-24 flex-col items-center gap-3 rounded-md px-4 py-5 transition-shadow hover:shadow-md sm:w-28"
            >
              <Icon className="h-9 w-9 transition-transform group-hover:scale-105 sm:h-10 sm:w-10" style={{ color }} />
              <span className="text-xs font-semibold text-heading">{name}</span>
            </div>
          ))}
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 80}>
              <div className="glass group h-full rounded-md p-6 transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-100 font-mono text-sm font-semibold text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-semibold text-heading">{group.category}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip rounded-sm px-2.5 py-1 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
