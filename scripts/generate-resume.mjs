import PDFDocument from 'pdfkit'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  profile,
  education,
  experiences,
  projects,
  skills,
  certifications,
  achievements,
} from '../src/data.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.resolve(__dirname, '../public/Liyakat-Hussain-Resume.pdf')

const ACCENT = '#0284c7'
const DARK = '#111827'
const MUTED = '#4b5563'
const LINE = '#d1d5db'

const doc = new PDFDocument({ size: 'A4', margin: 40 })
doc.pipe(fs.createWriteStream(outPath))

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right
const left = doc.page.margins.left
const bottomLimit = () => doc.page.height - doc.page.margins.bottom

function ensureSpace(h) {
  if (doc.y + h > bottomLimit()) doc.addPage()
}

function heading(text) {
  doc.moveDown(0.5)
  ensureSpace(46)
  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor(ACCENT)
    .text(text.toUpperCase(), left, doc.y, { characterSpacing: 1 })
  doc
    .moveTo(left, doc.y + 2)
    .lineTo(left + pageWidth, doc.y + 2)
    .lineWidth(0.8)
    .strokeColor(LINE)
    .stroke()
  doc.moveDown(0.4)
}

// Render one bullet as an atomic block so the marker never orphans across pages.
function bullet(text) {
  doc.font('Helvetica').fontSize(9).fillColor(MUTED)
  const indent = 12
  const h = doc.heightOfString(text, { width: pageWidth - indent, lineGap: 0.5 })
  ensureSpace(h + 3)
  const y = doc.y
  doc.circle(left + 3, y + 4.5, 1.4).fill(MUTED)
  doc.fillColor(MUTED).text(text, left + indent, y, {
    width: pageWidth - indent,
    lineGap: 0.5,
  })
  doc.moveDown(0.18)
}

// ---- Header ----
doc
  .font('Helvetica-Bold')
  .fontSize(22)
  .fillColor(DARK)
  .text(profile.name.toUpperCase(), { characterSpacing: 1 })
doc
  .font('Helvetica')
  .fontSize(10.5)
  .fillColor(ACCENT)
  .text('Data Science · Machine Learning · Deep Learning', { characterSpacing: 0.3 })
doc.moveDown(0.25)
doc
  .font('Helvetica')
  .fontSize(8.5)
  .fillColor(MUTED)
  .text(
    [
      profile.location,
      profile.phone,
      profile.email,
      'linkedin.com/in/liyakathussain12',
      'github.com/liyakat-12',
    ].join('   |   '),
  )

doc.moveDown(0.35)
doc.font('Helvetica').fontSize(9).fillColor(MUTED).text(profile.summary, {
  width: pageWidth,
  lineGap: 1,
})

// ---- Education ----
heading('Education')
doc.font('Helvetica-Bold').fontSize(10).fillColor(DARK).text(education.institution)
doc
  .font('Helvetica')
  .fontSize(9)
  .fillColor(MUTED)
  .text(`${education.degree}  |  ${education.period}  |  CGPA: ${education.cgpa}`)

// ---- Experience ----
heading('Experience')
experiences.forEach((exp) => {
  ensureSpace(56)
  const y = doc.y
  doc
    .font('Helvetica-Bold')
    .fontSize(10)
    .fillColor(DARK)
    .text(`${exp.role}, ${exp.company}`, left, y, { width: pageWidth - 120 })
  doc
    .font('Helvetica-Oblique')
    .fontSize(8.5)
    .fillColor(MUTED)
    .text(exp.period, left + pageWidth - 120, y, { width: 120, align: 'right' })
  doc.moveDown(0.15)
  exp.points.forEach(bullet)
  doc.moveDown(0.2)
})

// ---- Projects ----
heading('Projects')
projects.forEach((p) => {
  ensureSpace(50)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(DARK).text(`${p.title} — ${p.subtitle}`)
  doc.moveDown(0.08)
  p.points.forEach(bullet)
  doc.moveDown(0.2)
})

// ---- Skills ----
heading('Technical Skills')
skills.forEach((group) => {
  ensureSpace(24)
  const y = doc.y
  doc
    .font('Helvetica-Bold')
    .fontSize(9)
    .fillColor(DARK)
    .text(`${group.category}: `, left, y, { continued: true })
  doc.font('Helvetica').fillColor(MUTED).text(group.items.join(', '))
  doc.moveDown(0.08)
})

// ---- Certifications ----
heading('Certifications')
certifications.forEach((c) =>
  bullet(`${c.title} — ${c.issuer}${c.issued ? ` (${c.issued})` : ''}`),
)

// ---- Achievements ----
heading('Achievements')
achievements.forEach(bullet)

doc.end()
console.log('Resume PDF generated at', outPath)
