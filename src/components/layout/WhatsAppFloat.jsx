import { MessageCircle } from 'lucide-react'
import { siteInfo } from '../../data/content'

function WhatsAppFloat() {
  return (
    <a
      href={siteInfo.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_-12px_rgba(16,185,129,0.8)] hover:bg-emerald-400"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloat
