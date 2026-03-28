import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Repeat, ShieldCheck, Clock3 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import ProductCard from '../components/sections/ProductCard'
import ServiceCard from '../components/sections/ServiceCard'
import TestimonialCard from '../components/sections/TestimonialCard'
import CTABanner from '../components/sections/CTABanner'
import { featuredProducts } from '../data/products'
import {
  brands,
  locations,
  paymentMethods,
  siteInfo,
  testimonials,
  trustBadges,
} from '../data/content'
import { repairServices } from '../data/services'
import { fadeUp, staggerContainer } from '../utils/motion'

const MotionDiv = motion.div

const whyChoose = [
  {
    title: 'Trusted Quality Checks',
    description: 'Every used phone passes our 100+ point inspection before it reaches you.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Repair Turnaround',
    description: 'Most repairs are completed on the same day by professional technicians.',
    icon: Clock3,
  },
  {
    title: 'Best Trade-In Value',
    description: 'Upgrade with confidence using fair valuation and clear top-up pricing.',
    icon: Repeat,
  },
]

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-16 md:px-8 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.35),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.22),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_45%,#0f172a_100%)]" />
        <MotionDiv
          className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <MotionDiv variants={fadeUp}>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Trusted Smartphones, Smart Deals
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Buy, Repair, and Trade Smartphones in One Trusted Place
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
              MUPS helps you find premium new and used phones, professional repairs, and the best trade-in offers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/shop">
                Shop Now
                <ArrowRight size={16} />
              </Button>
              <Button as="a" href={siteInfo.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
                WhatsApp Us
              </Button>
              <Button as={Link} to="/repair" variant="ghost">
                View Repair Services
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {badge}
                </span>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
              <img
                src="/hero-smartphones.svg"
                alt="Premium smartphones display"
                className="h-[420px] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 backdrop-blur">
              <Wrench size={16} className="text-cyan-300" />
              Free device checking available daily
            </div>
          </MotionDiv>
        </MotionDiv>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="Featured Phones"
          title="Top Picks Available Right Now"
          subtitle="Carefully selected units with transparent condition and warranty details."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {featuredProducts.map((product) => (
            <MotionDiv key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </MotionDiv>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="Why Choose MUPS"
          title="Reliable, Fast, and Transparent Service"
          subtitle="We combine premium product quality with dependable after-sales support."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {whyChoose.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <item.icon className="text-cyan-300" size={22} />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Professional Repair and Device Care"
          subtitle="From screen replacement to board-level fixes, your phone is in expert hands."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {repairServices.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <CTABanner
          title="Trade In Your Phone and Upgrade Today"
          description="Bring your old device, get a fair valuation, and enjoy flexible upgrade or downgrade with top-up options."
          primaryLabel="Start Trade-In"
          primaryLink="/trade-in"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="Customer Reviews"
          title="Loved by Smartphone Buyers and Repair Customers"
          subtitle="Real feedback from customers who trusted MUPS."
        />
        <Swiper spaceBetween={16} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="Brands and Payments"
          title="Popular Brands with Flexible Payment Options"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Brands Available</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span key={brand} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Payment Methods</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span key={method} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionTitle
          eyebrow="Visit Us"
          title="Branch Location"
          subtitle={`${locations[0].name} - ${locations[0].address}`}
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            title="MUPS location map"
            src="https://maps.google.com/maps?q=Kuala%20Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[340px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}

export default HomePage
