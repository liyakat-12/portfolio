import { useEffect, useState } from 'react'
import { certifications } from '../data'
import Reveal, { SectionHeading } from './Reveal'

function certMeta(cert) {
  const parts = []
  if (cert.issued) parts.push(`Issued ${cert.issued}`)
  if (cert.expires) parts.push(`Expires ${cert.expires}`)
  return parts.join(' · ')
}

function issuerInitials(issuer) {
  return issuer
    .split(/[\s&,·]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export default function Certificates() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (active !== null) {
        if (e.key === 'ArrowRight') setActive((i) => (i + 1) % certifications.length)
        if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + certifications.length) % certifications.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  const current = active !== null ? certifications[active] : null

  return (
    <section id="certificates" className="section-muted relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="Licenses & Certifications"
          title="Credentials & courses"
          description="Professional certifications from Udemy, LinkedIn Learning, IUST, and industry programs."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="glass group block h-full w-full overflow-hidden rounded-md text-left transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-theme bg-slate-50 dark:bg-slate-800">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-50 to-slate-100 px-6 text-center dark:from-slate-800 dark:to-slate-900">
                      <span className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-700 font-display text-lg font-bold text-white dark:bg-blue-600">
                        {issuerInitials(cert.issuer)}
                      </span>
                      <span className="text-xs font-medium text-muted">{cert.issuer}</span>
                    </div>
                  )}
                  <span className="absolute bottom-3 right-3 rounded-sm bg-blue-700 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-blue-600">
                    View
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold leading-snug text-heading">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-accent">{cert.issuer}</p>
                  {certMeta(cert) && (
                    <p className="mt-0.5 font-mono text-[11px] text-muted">{certMeta(cert)}</p>
                  )}
                  {cert.skills?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-sm border border-theme bg-surface px-2 py-0.5 text-[10px] font-medium text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/85 p-4 backdrop-blur-sm dark:bg-black/90"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-2xl text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i - 1 + certifications.length) % certifications.length)
            }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => (i + 1) % certifications.length)
            }}
            aria-label="Next"
          >
            &#8250;
          </button>

          <div
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-md bg-white shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {current.image ? (
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[70vh] w-full bg-white object-contain p-2 dark:bg-slate-800"
              />
            ) : (
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-50 to-slate-100 px-8 py-12 dark:from-slate-800 dark:to-slate-900">
                <span className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-700 font-display text-xl font-bold text-white dark:bg-blue-600">
                  {issuerInitials(current.issuer)}
                </span>
                <p className="text-sm font-medium text-muted">{current.issuer}</p>
              </div>
            )}

            <div className="border-t border-theme px-6 py-5">
              <h3 className="font-display text-lg font-semibold text-heading">{current.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{current.issuer}</p>
              {certMeta(current) && (
                <p className="mt-1 font-mono text-xs text-muted">{certMeta(current)}</p>
              )}
              {current.credentialId && (
                <p className="mt-2 font-mono text-[11px] text-muted">
                  Credential ID: {current.credentialId}
                </p>
              )}
              {current.description && (
                <p className="mt-4 text-sm leading-relaxed text-body">{current.description}</p>
              )}
              {current.skills?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {current.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border border-theme bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
