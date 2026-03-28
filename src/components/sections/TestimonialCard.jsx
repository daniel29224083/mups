import { Star } from 'lucide-react'

function TestimonialCard({ testimonial }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="mb-4 flex gap-1 text-amber-300">
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <Star key={`${testimonial.id}-${idx}`} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-200">"{testimonial.review}"</p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-xs text-slate-400">{testimonial.role}</p>
      </div>
    </article>
  )
}

export default TestimonialCard
