import SectionTitle from '../components/common/SectionTitle'
import ServiceCard from '../components/sections/ServiceCard'
import FAQAccordion from '../components/sections/FAQAccordion'
import CTABanner from '../components/sections/CTABanner'
import { faqs } from '../data/content'
import { repairServices } from '../data/services'

function RepairPage() {
  const repairFaq = faqs.filter((faq) => faq.category === 'Repairs' || faq.category === 'Warranty')

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Repair Services"
        title="Fast, Professional Smartphone Repair"
        subtitle="Free checking, clear quotation, and skilled technicians for all major repairs."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {repairServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-cyan-100">
          <h3 className="text-lg font-semibold">Free Device Checking</h3>
          <p className="mt-2 text-sm">Walk in and get a quick diagnosis before you decide.</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
          <h3 className="text-lg font-semibold">Before and After Process</h3>
          <p className="mt-2 text-sm text-slate-300">Inspection, quotation, repair, quality test, and handover report.</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
          <h3 className="text-lg font-semibold">Fast Turnaround</h3>
          <p className="mt-2 text-sm text-slate-300">Most common repairs are completed in under 2 hours.</p>
        </article>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Service Inquiry Form</h3>
          <form className="mt-5 space-y-3">
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Name" />
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Phone Number" />
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Phone Model" />
            <textarea className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" rows="4" placeholder="Issue details" />
            <button type="button" className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950">Submit Inquiry</button>
          </form>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Repair FAQ</h3>
          <FAQAccordion items={repairFaq} />
        </div>
      </div>

      <div className="mt-12">
        <CTABanner
          title="Need urgent repair help?"
          description="Chat with MUPS repair team now and check slot availability."
          primaryLabel="View Shop"
          primaryLink="/shop"
        />
      </div>
    </section>
  )
}

export default RepairPage
