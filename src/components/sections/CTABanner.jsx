import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '../common/Button'
import { siteInfo } from '../../data/content'

function CTABanner({ title, description, primaryLabel = 'Shop Now', primaryLink = '/shop' }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-slate-900 p-6 md:p-8">
      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-200">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button as="a" href={primaryLink}>
            {primaryLabel}
            <ArrowRight size={16} />
          </Button>
          <Button as="a" href={siteInfo.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
            <MessageCircle size={16} />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CTABanner
