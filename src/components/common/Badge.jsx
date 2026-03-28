function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'bg-white/10 text-slate-100 border-white/15',
    success: 'bg-emerald-400/15 text-emerald-200 border-emerald-300/20',
    warning: 'bg-amber-300/15 text-amber-100 border-amber-200/20',
    accent: 'bg-cyan-400/15 text-cyan-100 border-cyan-200/20',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}

export default Badge
