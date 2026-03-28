import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Smartphone, Wrench, Repeat, CircleHelp, Phone } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button'
import { siteInfo } from '../../data/content'

const MotionDiv = motion.div

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop', icon: Smartphone },
  { name: 'Repair', to: '/repair', icon: Wrench },
  { name: 'Trade-In', to: '/trade-in', icon: Repeat },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact', icon: Phone },
  { name: 'FAQ', to: '/faq', icon: CircleHelp },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="bg-cyan-500/15 px-4 py-2 text-center text-xs font-medium text-cyan-100">
        Flash Deal: Free tempered glass with selected devices this week.
      </div>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img
            src="/mups-logo.svg"
            alt="MUPS logo"
            className="h-10 w-10 rounded-xl border border-cyan-300/20 bg-slate-900/70 p-1"
          />
          <div>
            <p className="text-sm font-bold tracking-wide">MUPS</p>
            <p className="text-[11px] text-slate-400">Trusted Smartphones, Smart Deals</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-cyan-200'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href={siteInfo.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp Us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <MotionDiv
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950 px-4 py-5 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                        isActive ? 'bg-cyan-400/10 text-cyan-200' : 'text-slate-200 hover:bg-white/5'
                      }`
                    }
                  >
                    {Icon ? <Icon size={15} /> : null}
                    {link.name}
                  </NavLink>
                )
              })}
            </nav>
            <div className="mt-4">
              <Button
                as="a"
                href={siteInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                WhatsApp Us
              </Button>
            </div>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
