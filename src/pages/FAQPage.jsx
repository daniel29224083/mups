import SectionTitle from '../components/common/SectionTitle'
import FAQAccordion from '../components/sections/FAQAccordion'
import { faqs } from '../data/content'

function FAQPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers about warranty, trade-in, repairs, payment methods, reservations, and used phone quality."
      />
      <FAQAccordion items={faqs} />
    </section>
  )
}

export default FAQPage
