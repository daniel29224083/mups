import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

const MotionDiv = motion.div

function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <MotionDiv
      className={`mb-10 max-w-2xl ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-slate-300 md:text-base">{subtitle}</p> : null}
    </MotionDiv>
  )
}

export default SectionTitle
