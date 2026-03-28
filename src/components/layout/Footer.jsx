import { Globe, Send, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/content'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">MUPS</h3>
          <p className="mt-3 text-sm text-slate-300">{siteInfo.tagline}</p>
          <p className="mt-2 text-sm text-slate-400">Daily, 10 AM to 9 PM</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Quick Links</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <Link className="block hover:text-cyan-200" to="/shop">
              Shop Phones
            </Link>
            <Link className="block hover:text-cyan-200" to="/repair">
              Repair Services
            </Link>
            <Link className="block hover:text-cyan-200" to="/trade-in">
              Trade-In
            </Link>
            <Link className="block hover:text-cyan-200" to="/faq">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p className="inline-flex items-center gap-2"><Phone size={14} /> +60 12-345 6789</p>
            <p className="inline-flex items-center gap-2"><Mail size={14} /> {siteInfo.email}</p>
            <p className="inline-flex items-start gap-2"><MapPin size={14} className="mt-0.5" /> Lot 21, Jalan Tech Avenue, Kuala Lumpur</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" className="rounded-lg border border-white/10 p-2 text-slate-200 hover:text-cyan-200" aria-label="Instagram">
              <Send size={16} />
            </a>
            <a href="#" className="rounded-lg border border-white/10 p-2 text-slate-200 hover:text-cyan-200" aria-label="Facebook">
              <Globe size={16} />
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">WhatsApp us now for stock and price.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} MUPS. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
