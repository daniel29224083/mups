import { createElement } from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Button({
  children,
  variant = 'primary',
  as: Component = 'button',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary:
      'bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:ring-cyan-300 shadow-[0_10px_25px_-12px_rgba(34,211,238,0.8)]',
    secondary:
      'border border-white/20 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/70',
    ghost: 'text-cyan-300 hover:bg-cyan-300/10 focus-visible:ring-cyan-300',
  }

  return (
    <MotionDiv whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-fit">
      {createElement(
        Component,
        { className: `${base} ${variants[variant]} ${className}`.trim(), ...props },
        children,
      )}
    </MotionDiv>
  )
}

export default Button
