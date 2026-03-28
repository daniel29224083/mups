import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const MotionDiv = motion.div

function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-cyan-200">{item.category}</p>
                <p className="mt-1 text-sm font-medium text-white md:text-base">{item.question}</p>
              </div>
              <ChevronDown
                className={`shrink-0 text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                size={18}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <MotionDiv
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <p className="border-t border-white/10 px-4 py-4 text-sm text-slate-300">{item.answer}</p>
                </MotionDiv>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion
