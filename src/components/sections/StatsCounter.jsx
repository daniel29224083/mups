import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

function StatsCounter({ value, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1300
    const start = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCount(value * progress)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value])

  const isDecimal = String(value).includes('.')

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
    >
      <p className="text-3xl font-bold text-cyan-300">{isDecimal ? count.toFixed(1) : Math.round(count).toLocaleString()}+</p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </MotionDiv>
  )
}

export default StatsCounter
