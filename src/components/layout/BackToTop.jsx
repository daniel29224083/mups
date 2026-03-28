import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900 text-slate-100 shadow-lg hover:bg-slate-800"
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
    </button>
  )
}

export default BackToTop
