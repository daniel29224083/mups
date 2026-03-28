import SectionTitle from '../components/common/SectionTitle'
import StatsCounter from '../components/sections/StatsCounter'
import { businessStats } from '../data/content'

const values = ['Transparent pricing', 'Quality control before sale', 'Fast support on WhatsApp', 'Friendly retail experience']
const team = ['Sales Specialist', 'Device Tester', 'Repair Technician', 'Customer Success']

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="About MUPS"
        title="A Smartphone Company Built on Trust"
        subtitle="MUPS is a modern smartphone store focused on trusted devices, reliable repairs, and fair trade-in offers."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            To make premium smartphones more accessible through transparent pricing, expert support, and dependable after-sales service.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            To be the most trusted smartphone buy-sell-repair destination in the region with high customer confidence.
          </p>
        </article>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Why Customers Trust Us</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {values.map((value) => (
              <li key={value}>- {value}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Team</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member} className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-200">
                {member}
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="mt-12">
        <SectionTitle eyebrow="Our Impact" title="Business Stats" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {businessStats.map((stat) => (
            <StatsCounter key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default AboutPage
