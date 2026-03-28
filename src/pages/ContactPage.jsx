import { Mail, MapPin, Phone, Clock3 } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { siteInfo } from '../data/content'

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s Talk About Your Next Phone"
        subtitle="Reach us for latest stock, repair bookings, and trade-in support."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Contact Form</h3>
          <form className="mt-5 space-y-3">
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Name" />
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Phone Number" />
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Email" />
            <textarea className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" rows="4" placeholder="Message" />
            <Button type="button">Send Message</Button>
          </form>
        </article>

        <article className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
            <p className="inline-flex items-center gap-2"><Phone size={15} className="text-cyan-300" /> +60 12-345 6789</p>
            <p className="mt-2 inline-flex items-center gap-2"><Mail size={15} className="text-cyan-300" /> {siteInfo.email}</p>
            <p className="mt-2 inline-flex items-start gap-2"><MapPin size={15} className="mt-0.5 text-cyan-300" /> Lot 21, Jalan Tech Avenue, Kuala Lumpur</p>
            <p className="mt-2 inline-flex items-center gap-2"><Clock3 size={15} className="text-cyan-300" /> {siteInfo.businessHours}</p>
          </div>

          <Button as="a" href={siteInfo.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp Us Now
          </Button>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="MUPS map"
              src="https://maps.google.com/maps?q=Kuala%20Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
