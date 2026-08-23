import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function SectionHeading({ kicker, title, description }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="accent-kicker">{kicker}</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-body">{description}</p>
      )}
    </Reveal>
  )
}
