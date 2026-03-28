import SectionTitle from '../components/common/SectionTitle'
import CTABanner from '../components/sections/CTABanner'
import { tradeInSteps } from '../data/services'

function TradeInPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Trade-In"
        title="Upgrade Smarter with MUPS Trade-In"
        subtitle="Sell your old phone, get valuation fast, and top up for your next upgrade."
      />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Trade-In Form</h3>
          <form className="mt-5 grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Customer Name" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Phone Number" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Device Brand" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Model" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Storage" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Condition" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Battery Health (%)" />
            <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" placeholder="Accessories Included" />
            <textarea className="md:col-span-2 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm" rows="4" placeholder="Additional Message" />
            <label className="md:col-span-2 flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-cyan-300/40 bg-cyan-300/10 px-4 py-4 text-sm text-cyan-100">
              <span>Upload Device Photos (UI mockup)</span>
              <span className="rounded-lg bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-900">Choose Files</span>
            </label>
            <button type="button" className="md:col-span-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950">Submit for Valuation</button>
          </form>
        </div>

        <div className="space-y-4">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">How Trade-In Works</h3>
            <div className="mt-4 space-y-3">
              {tradeInSteps.map((step) => (
                <div key={step.id} className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                  <p className="text-xs uppercase tracking-wide text-cyan-200">Step {step.id}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5 text-emerald-100">
            <h3 className="text-lg font-semibold">Upgrade or Downgrade Top-Up</h3>
            <p className="mt-2 text-sm">Top up cash for a newer model or receive cash back when downgrading.</p>
          </article>
        </div>
      </div>

      <div className="mt-12">
        <CTABanner
          title="Ready to check your trade-in value?"
          description="Send your device details and get response from our team quickly."
          primaryLabel="Shop Phones"
          primaryLink="/shop"
        />
      </div>
    </section>
  )
}

export default TradeInPage
